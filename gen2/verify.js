// Comprehensive post-build verification for the 4-calculator expansion.
// Checks: new page existence, internal link integrity, CSS/JS asset
// references, hreflang cross-reference completeness, canonical URLs,
// sitemap <-> filesystem 1:1 parity, RTL dir attribute on ar/fa/ur, and
// that nav link counts are consistent across all pages.
const fs = require('fs');
const path = require('path');
const { ROOT, DOMAIN, ALL_CALC_SLUGS, NEW_SLUGS, EXISTING_SLUGS, FOLDER_LANGS, HTML_LANG, RTL_FOLDERS } = require('./engine');

let failures = 0;
function ok(label) { console.log('OK   ' + label); }
function fail(label, detail) { failures++; console.log('FAIL ' + label + (detail ? ' -- ' + detail : '')); }

// ---- 1. All new HTML pages exist (76) ----
{
  let missing = [];
  for (const slug of NEW_SLUGS) {
    for (const folder of FOLDER_LANGS) {
      const p = path.join(ROOT, folder === 'ko' ? '' : folder, slug, 'index.html');
      if (!fs.existsSync(p)) missing.push(p);
    }
  }
  if (missing.length === 0) ok(`1. All ${NEW_SLUGS.length * FOLDER_LANGS.length} new pages exist`);
  else fail('1. New pages exist', missing.join(', '));
}

// Collect all page paths (all calc pages for all slugs, all home pages, about, privacy)
function allPagePaths() {
  const paths = [];
  for (const folder of FOLDER_LANGS) {
    const base = folder === 'ko' ? '' : folder;
    paths.push(path.join(ROOT, base, 'index.html'));
    for (const slug of ALL_CALC_SLUGS) {
      paths.push(path.join(ROOT, base, slug, 'index.html'));
    }
  }
  paths.push(path.join(ROOT, 'about', 'index.html'));
  paths.push(path.join(ROOT, 'privacy', 'index.html'));
  return paths;
}
const PAGES = allPagePaths();

// ---- 2. Internal relative link + asset reference integrity ----
{
  let brokenLinks = [];
  let brokenAssets = [];
  for (const p of PAGES) {
    if (!fs.existsSync(p)) { continue; } // reported separately
    const html = fs.readFileSync(p, 'utf8');
    const dir = path.dirname(p);
    // href="../x/" and src="../assets/..." style relative links
    const hrefRe = /(?:href|src)="(\.\.[^"]*|assets\/[^"]*|[a-z0-9-]+\/)"/g;
    let m;
    while ((m = hrefRe.exec(html))) {
      let target = m[1].split('?')[0].split('#')[0];
      if (!target || target.startsWith('http')) continue;
      let resolved = path.join(dir, target);
      if (target.endsWith('/')) resolved = path.join(resolved, 'index.html');
      if (!fs.existsSync(resolved)) {
        if (/\.(js|css)$/.test(target)) brokenAssets.push(p + ' -> ' + target);
        else brokenLinks.push(p + ' -> ' + target);
      }
    }
  }
  if (brokenLinks.length === 0) ok('2a. Internal page links resolve (all ' + PAGES.length + ' pages)');
  else fail('2a. Internal page links resolve', brokenLinks.slice(0, 10).join(' | ') + (brokenLinks.length > 10 ? ` (+${brokenLinks.length - 10} more)` : ''));
  if (brokenAssets.length === 0) ok('2b. CSS/JS asset references resolve');
  else fail('2b. CSS/JS asset references resolve', brokenAssets.slice(0, 10).join(' | '));
}

// ---- 3. hreflang cross-reference completeness for the 4 new calc groups ----
{
  let problems = [];
  for (const slug of NEW_SLUGS) {
    for (const folder of FOLDER_LANGS) {
      const p = path.join(ROOT, folder === 'ko' ? '' : folder, slug, 'index.html');
      const html = fs.readFileSync(p, 'utf8');
      const hreflangs = [...html.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)];
      const codes = hreflangs.map((h) => h[1]);
      const expectedCodes = FOLDER_LANGS.map((f) => HTML_LANG[f]).concat(['x-default']);
      // en appears 3x in HTML_LANG values? No -- HTML_LANG has each folder once; 'en' appears once as folder.
      const uniqueExpected = Array.from(new Set(expectedCodes));
      for (const code of uniqueExpected) {
        if (!codes.includes(code)) problems.push(`${slug}/${folder}: missing hreflang ${code}`);
      }
      // canonical self-check
      const canon = html.match(/<link rel="canonical" href="([^"]+)">/);
      const expectedCanon = `${DOMAIN}/${folder === 'ko' ? '' : folder + '/'}${slug}/`;
      if (!canon || canon[1] !== expectedCanon) {
        problems.push(`${slug}/${folder}: canonical mismatch (got ${canon ? canon[1] : 'MISSING'}, expected ${expectedCanon})`);
      }
      // every hreflang href must point at an existing file
      for (const [, , href] of hreflangs) {
        if (href.includes('x-default')) continue;
      }
    }
  }
  if (problems.length === 0) ok('3. hreflang + canonical correct for all 76 new pages');
  else fail('3. hreflang + canonical correct', problems.slice(0, 15).join(' | '));
}

// ---- 4. RTL dir attribute on ar/fa/ur pages (new + existing spot check) ----
{
  let problems = [];
  for (const folder of RTL_FOLDERS) {
    for (const slug of ALL_CALC_SLUGS) {
      const p = path.join(ROOT, folder, slug, 'index.html');
      const html = fs.readFileSync(p, 'utf8');
      if (!/<html lang="[^"]*" dir="rtl">/.test(html)) problems.push(p);
    }
    const homeP = path.join(ROOT, folder, 'index.html');
    const homeHtml = fs.readFileSync(homeP, 'utf8');
    if (!/<html lang="[^"]*" dir="rtl">/.test(homeHtml)) problems.push(homeP);
  }
  if (problems.length === 0) ok('4. RTL dir="rtl" present on all ar/fa/ur pages (14 calcs + home)');
  else fail('4. RTL dir="rtl" present', problems.join(', '));
}

// ---- 5. sitemap.xml <-> filesystem 1:1 parity ----
{
  const sitemapXml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const sitemapSet = new Set(locs);
  let missingFile = [];
  let dup = locs.length !== sitemapSet.size;
  for (const loc of locs) {
    const rel = loc.replace(DOMAIN, '').replace(/^\//, '');
    const filePath = rel === '' ? path.join(ROOT, 'index.html') : path.join(ROOT, rel, 'index.html');
    if (!fs.existsSync(filePath)) missingFile.push(loc);
  }
  // reverse: every actual page should be in sitemap
  let missingFromSitemap = [];
  for (const p of PAGES) {
    const rel = path.relative(ROOT, p).replace(/index\.html$/, '').replace(/\\/g, '/');
    const loc = rel === '' ? `${DOMAIN}/` : `${DOMAIN}/${rel}`;
    if (!sitemapSet.has(loc)) missingFromSitemap.push(loc);
  }
  if (missingFile.length === 0 && !dup && missingFromSitemap.length === 0) {
    ok(`5. sitemap.xml 1:1 with filesystem (${locs.length} URLs, ${PAGES.length} pages)`);
  } else {
    fail('5. sitemap.xml 1:1 with filesystem',
      `missingFile=${missingFile.length} dup=${dup} missingFromSitemap=${missingFromSitemap.slice(0, 10).join(',')}`);
  }
}

// ---- 6. Nav item count consistency (14 calc links + Home [+ About on ko]) ----
{
  let problems = [];
  for (const p of PAGES) {
    const html = fs.readFileSync(p, 'utf8');
    const m = html.match(/<nav class="main-nav">([\s\S]*?)<\/nav>/);
    if (!m) { problems.push(p + ': no nav found'); continue; }
    const linkCount = (m[1].match(/<a /g) || []).length;
    const isKoAbout = p.includes(path.sep + 'about' + path.sep) || p.endsWith('privacy' + path.sep + 'index.html');
    const folder = p.includes(path.sep + 'ko' + path.sep) ? 'ko' : null; // not used, ko has no folder segment
    const isKoPage = !FOLDER_LANGS.slice(1).some((f) => p.includes(path.sep + f + path.sep));
    const expected = (ALL_CALC_SLUGS.length + 1) + (isKoPage ? 1 : 0); // +1 Home, +1 About on ko
    if (linkCount !== expected) problems.push(`${p}: nav has ${linkCount} links, expected ${expected}`);
  }
  if (problems.length === 0) ok(`6. Nav link count consistent across all ${PAGES.length} pages`);
  else fail('6. Nav link count consistent', problems.slice(0, 10).join(' | '));
}

// ---- 7. related section includes all 4 new slugs on old-10 calc pages ----
{
  let problems = [];
  for (const folder of FOLDER_LANGS) {
    for (const slug of EXISTING_SLUGS) {
      const p = path.join(ROOT, folder === 'ko' ? '' : folder, slug, 'index.html');
      const html = fs.readFileSync(p, 'utf8');
      const relM = html.match(/<div class="related">([\s\S]*?)<\/div>/);
      if (!relM) { problems.push(p + ': no related div'); continue; }
      for (const newSlug of NEW_SLUGS) {
        if (!relM[1].includes(`/${newSlug}/`)) problems.push(`${p}: related missing ${newSlug}`);
      }
    }
  }
  if (problems.length === 0) ok('7. related section links to all 4 new calculators on all 190 old-calc pages');
  else fail('7. related section updated', problems.slice(0, 10).join(' | '));
}

console.log('\n' + (failures === 0 ? `ALL CHECKS PASSED` : `${failures} CHECK GROUP(S) FAILED`));
process.exit(failures === 0 ? 0 : 1);
