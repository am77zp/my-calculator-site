// Engine for adding 4 new calculators (tip, splitbill, fuel, agediff) to
// the existing 19-language, 10-calculator site, mirroring the exact
// conventions already used by gen/engine.py + gen/build.py (same head
// block shape, nav/lang-modal/breadcrumb/footer chrome, hreflang/canonical
// scheme, versioned asset query string, window.I18N embedding for
// non-Korean pages). Ported to Node.js because no working Python
// interpreter is available in this environment.
const path = require('path');
const fs = require('fs');

const ROOT = path.dirname(__dirname); // .../site
const DOMAIN = 'https://my-calculator-site-6l0.pages.dev';
const VERSION = '20260919-3'; // bumped: calculators.js, i18n.js, style.css all gain new content

const EXISTING_SLUGS = ['age', 'dday', 'discount', 'unit', 'bmi', 'percent', 'percentchange', 'datediff', 'time', 'speed'];
const NEW_SLUGS = ['tip', 'splitbill', 'fuel', 'agediff'];
const ALL_CALC_SLUGS = EXISTING_SLUGS.concat(NEW_SLUGS);

const FOLDER_LANGS = ['ko', 'zh-cn', 'hi', 'en', 'id', 'pt-br', 'ru', 'ur', 'es', 'ja',
  'tl', 'ar', 'vi', 'de', 'bn', 'tr', 'fa', 'th', 'fr'];

const HTML_LANG = {
  ko: 'ko', 'zh-cn': 'zh-CN', hi: 'hi', en: 'en', id: 'id',
  'pt-br': 'pt-BR', ru: 'ru', ur: 'ur', es: 'es', ja: 'ja',
  tl: 'tl', ar: 'ar', vi: 'vi', de: 'de', bn: 'bn', tr: 'tr',
  fa: 'fa', th: 'th', fr: 'fr',
};
const RTL_FOLDERS = new Set(['ar', 'fa', 'ur']);

const LANG_GRID_ROWS = [
  ['🇰🇷', 'South Korea', '한국어', 'ko'],
  ['🇨🇳', 'China', '简体中文', 'zh-cn'],
  ['🇮🇳', 'India', 'हिन्दी', 'hi'],
  ['🇺🇸', 'United States', 'English', 'en'],
  ['🇮🇩', 'Indonesia', 'Bahasa Indonesia', 'id'],
  ['🇧🇷', 'Brazil', 'Português', 'pt-br'],
  ['🇷🇺', 'Russia', 'Русский', 'ru'],
  ['🇵🇰', 'Pakistan', 'اردو', 'ur'],
  ['🇲🇽', 'Mexico', 'Español', 'es'],
  ['🇯🇵', 'Japan', '日本語', 'ja'],
  ['🇳🇬', 'Nigeria', 'English', 'en'],
  ['🇵🇭', 'Philippines', 'Filipino', 'tl'],
  ['🇪🇬', 'Egypt', 'العربية', 'ar'],
  ['🇻🇳', 'Vietnam', 'Tiếng Việt', 'vi'],
  ['🇩🇪', 'Germany', 'Deutsch', 'de'],
  ['🇧🇩', 'Bangladesh', 'বাংলা', 'bn'],
  ['🇹🇷', 'Turkiye', 'Türkçe', 'tr'],
  ['🇮🇷', 'Iran', 'فارسی', 'fa'],
  ['🇬🇧', 'United Kingdom', 'English', 'en'],
  ['🇹🇭', 'Thailand', 'ไทย', 'th'],
  ['🇫🇷', 'France', 'Français', 'fr'],
];

function depthPrefix(folder) {
  return folder === 'ko' ? '../' : '../../';
}

function buildHreflangBlock(calcSlug) {
  const lines = [];
  for (const folder of FOLDER_LANGS) {
    const path_ = `${DOMAIN}/${folder !== 'ko' ? folder + '/' : ''}${calcSlug}/`;
    lines.push(`<link rel="alternate" hreflang="${HTML_LANG[folder]}" href="${path_}">`);
  }
  const xDefault = `${DOMAIN}/en/${calcSlug}/`;
  lines.push(`<link rel="alternate" hreflang="x-default" href="${xDefault}">`);
  return lines.join('\n');
}

function buildLangModal(folder, calcSlug, prefix) {
  const items = LANG_GRID_ROWS.map(([flag, country, langname, targetFolder]) => {
    const href = targetFolder === 'ko' ? `${prefix}${calcSlug}/` : `${prefix}${targetFolder}/${calcSlug}/`;
    const cur = targetFolder === folder ? ' current' : '';
    return `<a class="lang-item${cur}" href="${href}"><span class="flag">${flag}</span>` +
      `<span class="names"><span class="country">${country}</span>` +
      `<span class="langname">${langname}</span></span></a>`;
  }).join('');
  return (
    '<div id="lang-modal-overlay" class="lang-modal-overlay" hidden>' +
    '<div id="lang-modal" class="lang-modal" role="dialog" aria-modal="true" ' +
    'aria-labelledby="lang-modal-title" tabindex="-1">' +
    '<div class="lang-modal-head">' +
    '<h2 id="lang-modal-title" class="lang-modal-title"></h2>' +
    '<button type="button" id="lang-modal-close" class="lang-modal-close">&times;</button>' +
    '</div>' +
    `<div class="lang-grid">${items}</div>` +
    '<label class="lang-modal-dontshow">' +
    '<input type="checkbox" id="lang-dontshow-checkbox">' +
    '<span id="lang-dontshow-label"></span>' +
    '</label>' +
    '</div></div>' +
    '<button type="button" id="lang-fab" class="lang-fab">🌐 <span id="lang-fab-label"></span></button>'
  );
}

module.exports = {
  ROOT, DOMAIN, VERSION, EXISTING_SLUGS, NEW_SLUGS, ALL_CALC_SLUGS,
  FOLDER_LANGS, HTML_LANG, RTL_FOLDERS, LANG_GRID_ROWS,
  depthPrefix, buildHreflangBlock, buildLangModal,
};
