// Generates the 76 new calculator pages (4 slugs x 19 languages) using
// engine.js conventions, gen/chrome.json site-chrome strings, and this
// folder's content_*.js per-calculator localized content.
const fs = require('fs');
const path = require('path');

const {
  ROOT, DOMAIN, VERSION, ALL_CALC_SLUGS, NEW_SLUGS,
  FOLDER_LANGS, HTML_LANG, RTL_FOLDERS,
  depthPrefix, buildHreflangBlock, buildLangModal,
} = require('./engine');

const TIP = require('./content_tip');
const SPLITBILL = require('./content_splitbill');
const FUEL = require('./content_fuel');
const AGEDIFF = require('./content_agediff');

const CHROME = JSON.parse(fs.readFileSync(path.join(ROOT, 'gen', 'chrome.json'), 'utf8'));

const BUTTON_LABEL = {
  ko: '계산하기', en: 'Calculate', ja: '計算する', 'zh-cn': '计算',
  hi: 'गणना करें', id: 'Hitung', 'pt-br': 'Calcular', ru: 'Рассчитать',
  ur: 'حساب کریں', es: 'Calcular', tl: 'Kalkulahin', ar: 'احسب',
  vi: 'Tính', de: 'Berechnen', bn: 'হিসাব করুন', tr: 'Hesapla',
  fa: 'محاسبه', th: 'คำนวณ', fr: 'Calculer',
};
const ABOUT_LABEL_KO = '소개';
const PRIVACY_LABEL_KO = '개인정보처리방침';

function existingNavLabels(folder) {
  const p = path.join(ROOT, folder === 'ko' ? '' : folder, 'age', 'index.html');
  const html = fs.readFileSync(p, 'utf8');
  const m = html.match(/<nav class="main-nav">([\s\S]*?)<\/nav>/);
  const navHtml = m[1];
  const re = /<a href="([^"]+)" class="[^"]*">([^<]*)<\/a>/g;
  const labels = {};
  let mm;
  while ((mm = re.exec(navHtml))) {
    const href = mm[1], text = mm[2];
    const seg = href.split('/').filter((s) => s && s !== '.');
    if (!seg.length) continue;
    labels[seg[seg.length - 1]] = text;
  }
  return labels;
}

const NAV_LABELS = {};
for (const folder of FOLDER_LANGS) {
  NAV_LABELS[folder] = existingNavLabels(folder);
}
const CALC_CONTENTS = { tip: TIP, splitbill: SPLITBILL, fuel: FUEL, agediff: AGEDIFF };
for (const [slug, content] of Object.entries(CALC_CONTENTS)) {
  for (const folder of FOLDER_LANGS) {
    NAV_LABELS[folder][slug] = content[folder].nav;
  }
}

function buildNav(folder, slug, prefix) {
  const homeHref = folder === 'ko' ? prefix : prefix + folder + '/';
  const parts = [`<a href="${homeHref}" class="">${CHROME[folder].home_label}</a>`];
  for (const s of ALL_CALC_SLUGS) {
    const href = folder === 'ko' ? prefix + s + '/' : prefix + folder + '/' + s + '/';
    const cls = s === slug ? 'active' : '';
    parts.push(`<a href="${href}" class="${cls}">${NAV_LABELS[folder][s]}</a>`);
  }
  if (folder === 'ko') {
    parts.push(`<a href="${prefix}about/" class="">${ABOUT_LABEL_KO}</a>`);
  }
  return '<nav class="main-nav">' + parts.join('') + '</nav>';
}

function titleShort(title) {
  return title.split(' - ')[0];
}

// ---- per-calculator field HTML + i18n-object builders ----

function tipFields(folder, c) {
  const lbl = c.labels;
  return (
    `<div class="row"><div class="field"><label>${lbl.bill}</label><input type="number" id="tip-bill" min="0"></div>` +
    `<div class="field"><label>${lbl.people}</label><input type="number" id="tip-people" min="1" step="1"></div></div>` +
    `<div class="row"><div class="field"><label>${lbl.percent}</label><input type="number" id="tip-percent" min="0" step="0.1"></div></div>` +
    `<div class="row"><div class="field"><label>${lbl.presets}</label><div class="preset-row">` +
    '<button type="button" class="preset-btn" onclick="tipSetPreset(10)">10%</button>' +
    '<button type="button" class="preset-btn" onclick="tipSetPreset(15)">15%</button>' +
    '<button type="button" class="preset-btn" onclick="tipSetPreset(18)">18%</button>' +
    '<button type="button" class="preset-btn" onclick="tipSetPreset(20)">20%</button>' +
    '</div></div></div>'
  );
}
function tipI18n(c) {
  const rt = c.result_tpl;
  return {
    tip_alert: c.alert,
    tip_per_tpl: rt.per_tpl,
    tip_tip_tpl: rt.tip_tpl,
    tip_total_tpl: rt.total_tpl,
  };
}

function splitbillFields(folder, c) {
  const lbl = c.labels;
  return (
    `<div class="row"><div class="field"><label>${lbl.total}</label><input type="number" id="split-total" min="0"></div>` +
    `<div class="field"><label>${lbl.people}</label><input type="number" id="split-people" min="1" step="1"></div></div>` +
    `<div class="row"><div class="field"><label>${lbl.extra}</label><input type="number" id="split-extra" min="0"></div>` +
    `<div class="field"><label>${lbl.discount}</label><input type="number" id="split-discount" min="0"></div></div>`
  );
}
function splitbillI18n(c) {
  const rt = c.result_tpl;
  return {
    splitbill_alert: c.alert,
    splitbill_per_tpl: rt.per_tpl,
    splitbill_total_tpl: rt.total_tpl,
    splitbill_detail_tpl: rt.detail_tpl,
  };
}

function fuelFields(folder, c) {
  const lbl = c.labels;
  return (
    '<div class="row"><div class="field"><label>' + lbl.unit + '</label>' +
    '<select id="fuel-unit"><option value="kml">km/L</option><option value="l100km">L/100km</option>' +
    '<option value="mpgus">US mpg</option><option value="mpguk">UK mpg</option></select></div>' +
    `<div class="field"><label>${lbl.value}</label><input type="number" id="fuel-value" step="any"></div></div>`
  );
}
function fuelI18n(c) {
  return { fuel_alert: c.alert };
}

function agediffFields(folder, c) {
  const lbl = c.labels;
  return (
    `<div class="row"><div class="field"><label>${lbl.person_a}</label><input type="date" id="ad-a"></div>` +
    `<div class="field"><label>${lbl.person_b}</label><input type="date" id="ad-b"></div></div>`
  );
}
function agediffI18n(c) {
  const rt = c.result_tpl;
  return {
    agediff_alert: c.alert,
    agediff_alert_future: c.alert_future,
    agediff_diff_tpl: rt.diff_tpl,
    agediff_a_older_tpl: rt.a_older_tpl,
    agediff_b_older_tpl: rt.b_older_tpl,
    agediff_same_tpl: rt.same_tpl,
    agediff_total_days_tpl: rt.total_days_tpl,
  };
}

const CALC_DEFS = {
  tip: { content: TIP, resultId: 'tip-result', fields: tipFields, i18n: tipI18n, funcKo: 'calcTip', funcGlobal: 'calcTipGlobal' },
  splitbill: { content: SPLITBILL, resultId: 'split-result', fields: splitbillFields, i18n: splitbillI18n, funcKo: 'calcSplitBill', funcGlobal: 'calcSplitBillGlobal' },
  fuel: { content: FUEL, resultId: 'fuel-result', fields: fuelFields, i18n: fuelI18n, funcKo: 'calcFuel', funcGlobal: 'calcFuelGlobal' },
  agediff: { content: AGEDIFF, resultId: 'ad-result', fields: agediffFields, i18n: agediffI18n, funcKo: 'calcAgeDiff', funcGlobal: 'calcAgeDiffGlobal' },
};

function buildPage(slug, folder) {
  const d = CALC_DEFS[slug];
  const c = d.content[folder];
  const chrome = CHROME[folder];
  const isKo = folder === 'ko';
  const prefix = depthPrefix(folder);
  const htmlLang = HTML_LANG[folder];
  const dirAttr = RTL_FOLDERS.has(folder) ? ' dir="rtl"' : '';
  const canonical = `${DOMAIN}/${isKo ? '' : folder + '/'}${slug}/`;
  const hreflang = buildHreflangBlock(slug);
  const langModal = buildLangModal(folder, slug, prefix);
  const navHtml = buildNav(folder, slug, prefix);
  const homeHref = isKo ? prefix : prefix + folder + '/';
  const tShort = titleShort(c.title);

  const fieldsHtml = d.fields(folder, c);
  const funcName = isKo ? d.funcKo : d.funcGlobal;

  const usageLis = c.usage.map((u) => `<li>${u}</li>`).join('');
  const examplesHtml = c.examples.map((e) => `<div class="example">${e}</div>`).join('');
  const faqHtml = c.faq.map(([q, a]) => `<div class="faq-item"><div class="q">${q}</div><p class="a">${a}</p></div>`).join('');

  const otherSlugs = ALL_CALC_SLUGS.filter((s) => s !== slug);
  const relatedLinks = otherSlugs.map((s) => {
    const href = isKo ? prefix + s + '/' : prefix + folder + '/' + s + '/';
    return `<a href="${href}">${NAV_LABELS[folder][s]}</a>`;
  }).join('');

  let i18nScript = '';
  if (!isKo) {
    const i18nObj = d.i18n(c);
    i18nScript = `<script>window.I18N = ${JSON.stringify(i18nObj)};</script>\n`;
  }

  const footerExtra = isKo
    ? `<br>\n  <a href="${prefix}about/">${ABOUT_LABEL_KO}</a> · <a href="${prefix}privacy/">${PRIVACY_LABEL_KO}</a>`
    : '';

  return `<!DOCTYPE html>
<html lang="${htmlLang}"${dirAttr}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c.title}</title>
<meta name="description" content="${c.meta}">
<link rel="canonical" href="${canonical}">
${hreflang}
<link rel="stylesheet" href="${prefix}assets/style.css?v=${VERSION}">
${i18nScript}</head>
<body>
<header class="site-header">
  <h1><a href="${homeHref}">${chrome.site_title}</a></h1>
  <p>${chrome.tagline}</p>
</header>
${navHtml}${langModal}
<div class="breadcrumb"><a href="${homeHref}">${chrome.breadcrumb_home}</a> &gt; ${tShort}</div><div class="container">
  <div class="ad-slot">${chrome.ad_slot}</div>
  <div class="card">
    <h2>${tShort}</h2>
    <p class="desc">${c.card_desc}</p>
    ${fieldsHtml}
    <button onclick="${funcName}()">${BUTTON_LABEL[folder]}</button>
    <div class="result" id="${d.resultId}"></div>
  </div>
  <article class="content">
    <h2>${chrome.heading_usage}</h2><ol>${usageLis}</ol>
    <h2>${chrome.heading_method}</h2><p>${c.method}</p>
    <h2>${chrome.heading_examples}</h2>${examplesHtml}
    <h2>${chrome.heading_faq}</h2>${faqHtml}
    <h2>${chrome.heading_related}</h2><div class="related">${relatedLinks}</div>
  </article>
</div>
<footer>
  ${chrome.footer_main}${footerExtra}
</footer>
<script src="${prefix}assets/calculators.js?v=${VERSION}"></script>
<script src="${prefix}assets/i18n.js?v=${VERSION}"></script>
</body>
</html>
`;
}

function main() {
  let count = 0;
  for (const slug of NEW_SLUGS) {
    for (const folder of FOLDER_LANGS) {
      const page = buildPage(slug, folder);
      const outDir = path.join(ROOT, folder === 'ko' ? '' : folder, slug);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), page, 'utf8');
      count++;
    }
  }
  console.log(`Generated ${count} pages`);
}

if (require.main === module) {
  main();
}

module.exports = { buildPage, NAV_LABELS, CALC_DEFS };
