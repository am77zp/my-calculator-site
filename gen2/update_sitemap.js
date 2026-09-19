// Appends the 76 new calculator page URLs (4 slugs x 19 languages) to
// sitemap.xml, following the exact same grouping convention already used
// for the previous 5-calculator expansion (percent/percentchange/...):
// blocks of "one slug across all 19 language folders", appended before
// </urlset>. No existing <loc> line is touched, moved, or removed.
const fs = require('fs');
const path = require('path');
const { ROOT, DOMAIN, NEW_SLUGS, FOLDER_LANGS } = require('./engine');

function main() {
  const sitemapPath = path.join(ROOT, 'sitemap.xml');
  const xml = fs.readFileSync(sitemapPath, 'utf8');

  const beforeCount = (xml.match(/<loc>/g) || []).length;

  let newLines = '';
  for (const slug of NEW_SLUGS) {
    for (const folder of FOLDER_LANGS) {
      const url = `${DOMAIN}/${folder !== 'ko' ? folder + '/' : ''}${slug}/`;
      newLines += `  <url><loc>${url}</loc></url>\n`;
    }
  }

  if (!xml.includes('</urlset>')) {
    throw new Error('sitemap.xml missing </urlset> closing tag');
  }
  const newXml = xml.replace('</urlset>', newLines + '</urlset>');

  fs.writeFileSync(sitemapPath, newXml, 'utf8');
  const afterCount = (newXml.match(/<loc>/g) || []).length;
  console.log(`sitemap.xml: ${beforeCount} -> ${afterCount} URLs (+${afterCount - beforeCount})`);
}

if (require.main === module) {
  main();
}
