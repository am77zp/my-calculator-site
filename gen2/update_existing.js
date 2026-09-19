// Updates the 211 pre-existing pages (190 calculator pages = 10 slugs x 19
// langs, 19 home pages, about/ and privacy/) so that:
//   - nav (main-nav) gets the 4 new calculator links added, preserving the
//     active-class logic and every existing href/label byte-for-byte.
//   - the "related" section on the 10 existing calculator pages gets the
//     4 new calculator links appended (additive only).
//   - the 19 home pages' .home-grid and "popular calculators" <ul> get the
//     4 new calculators appended.
//   - asset version query strings bumped 20260919-2 -> 20260919-3.
// Nothing else in these files is touched: card/content sections, about/
// privacy body content, translated text, hreflang/canonical, and all other
// markup are left byte-for-byte identical. Ported to Node.js (no working
// Python interpreter in this environment).
const fs = require('fs');
const path = require('path');
const { ROOT, VERSION, EXISTING_SLUGS, NEW_SLUGS, FOLDER_LANGS } = require('./engine');
const { NAV_LABELS } = require('./build_pages');

const OLD_VERSION = '20260919-2';

function bumpVersion(html) {
  return html.split(`?v=${OLD_VERSION}`).join(`?v=${VERSION}`);
}

// Derives the href prefix used by this page's OWN existing links (so new
// links match the page's actual depth/folder convention) by finding the
// href of the "age" nav link and stripping the trailing "age/".
function derivePrefixFromNav(navInner) {
  const m = navInner.match(/<a href="([^"]*?)age\/" class="[^"]*">/);
  if (!m) throw new Error('age link not found in nav');
  return m[1];
}

function insertNavLinks(navInner, folder, prefix) {
  const newLinks = NEW_SLUGS.map((slug) => `<a href="${prefix}${slug}/" class="">${NAV_LABELS[folder][slug]}</a>`).join('');
  if (navInner.includes('about/')) {
    return navInner.replace(/(<a href="[^"]*about\/"[^>]*>[^<]*<\/a>)/, newLinks + '$1');
  }
  return navInner + newLinks;
}

function updateNav(html, folder) {
  const navRe = /<nav class="main-nav">([\s\S]*?)<\/nav>/;
  const m = html.match(navRe);
  if (!m) throw new Error('nav not found');
  const prefix = derivePrefixFromNav(m[1]);
  const newInner = insertNavLinks(m[1], folder, prefix);
  return html.replace(navRe, '<nav class="main-nav">' + newInner + '</nav>');
}

function updateRelated(html, folder) {
  const relRe = /<div class="related">([\s\S]*?)<\/div>/;
  const m = html.match(relRe);
  if (!m) return html; // about/privacy have no related section
  const slugAlt = EXISTING_SLUGS.join('|');
  const linkM = m[1].match(new RegExp('<a href="([^"]*?)(?:' + slugAlt + ')/">'));
  if (!linkM) throw new Error('could not derive related-link prefix');
  const prefix = linkM[1];
  const newLinks = NEW_SLUGS.map((slug) => `<a href="${prefix}${slug}/">${NAV_LABELS[folder][slug]}</a>`).join('');
  return html.replace(relRe, '<div class="related">' + m[1] + newLinks + '</div>');
}

function updateCalcOrStaticPage(filePath, folder) {
  const html = fs.readFileSync(filePath, 'utf8');
  let html2 = updateNav(html, folder);
  html2 = updateRelated(html2, folder);
  html2 = bumpVersion(html2);
  if (html2 !== html) {
    fs.writeFileSync(filePath, html2, 'utf8');
    return true;
  }
  return false;
}

function titleShort(title) {
  return title.split(' - ')[0];
}

// Rebuild content dicts to pull home_desc/title for the new slugs' tool
// cards, matching build_pages.js's CALC_DEFS content sources.
const { CALC_DEFS } = require('./build_pages');

function updateHomePage(folder) {
  const filePath = path.join(ROOT, folder === 'ko' ? '' : folder, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  let html2 = updateNav(html, folder);
  html2 = bumpVersion(html2);

  // Derive prefix from an existing tool-card href inside .home-grid
  const gridRe = /<div class="home-grid">([\s\S]*?)<\/div>\s*<article class="content">/;
  const gridM = html2.match(gridRe);
  if (!gridM) throw new Error('home-grid not found in ' + filePath);
  const slugAlt = EXISTING_SLUGS.join('|');
  const cardLinkM = gridM[1].match(new RegExp('href="([^"]*?)(?:' + slugAlt + ')/"'));
  if (!cardLinkM) throw new Error('could not derive home-grid prefix in ' + filePath);
  const gridPrefix = cardLinkM[1];

  let cardsHtml = '';
  let listHtml = '';
  for (const slug of NEW_SLUGS) {
    const c = CALC_DEFS[slug].content[folder];
    const t = titleShort(c.title);
    const desc = c.home_desc;
    const href = gridPrefix + slug + '/';
    cardsHtml += `<a class="tool-card" href="${href}"><div class="t">${t}</div><div class="d">${desc}</div></a>`;
    listHtml += `<li><a href="${href}">${t}</a> &#8212; ${desc}</li>`;
  }

  html2 = html2.replace(gridRe, (whole) => whole.slice(0, whole.lastIndexOf('</div>')) + cardsHtml + whole.slice(whole.lastIndexOf('</div>')));

  const ulRe = /<ul>([\s\S]*?)<\/ul>\s*<\/article>/;
  const ulM = html2.match(ulRe);
  if (!ulM) throw new Error('popular list not found in ' + filePath);
  html2 = html2.replace(ulRe, (whole) => whole.slice(0, whole.lastIndexOf('</ul>')) + listHtml + whole.slice(whole.lastIndexOf('</ul>')));

  fs.writeFileSync(filePath, html2, 'utf8');
}

function main() {
  let updated = 0;
  for (const folder of FOLDER_LANGS) {
    const base = folder === 'ko' ? '' : folder;
    for (const slug of EXISTING_SLUGS) {
      const p = path.join(ROOT, base, slug, 'index.html');
      if (updateCalcOrStaticPage(p, folder)) updated++;
    }
    updateHomePage(folder);
    updated++;
  }
  if (updateCalcOrStaticPage(path.join(ROOT, 'about', 'index.html'), 'ko')) updated++;
  if (updateCalcOrStaticPage(path.join(ROOT, 'privacy', 'index.html'), 'ko')) updated++;
  console.log(`Updated ${updated} existing pages`);
}

if (require.main === module) {
  main();
}
