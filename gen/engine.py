#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Engine for adding 5 new calculators (percent, percentchange, datediff, time, speed)
to the existing 19-language calculator site, mirroring the exact conventions of
the existing 5 calculators (age, dday, discount, unit, bmi) byte-for-byte in
structure: same head block shape, same nav/lang-modal/breadcrumb/footer chrome,
same script tags, same hreflang/canonical scheme, same versioned asset query
string, same window.I18N embedding style for non-Korean pages.
"""
import os, re, json, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOMAIN = 'https://my-calculator-site-6l0.pages.dev'
VERSION = '20260919-2'  # bumped because assets/style.css, calculators.js, i18n.js all gain new content

EXISTING_SLUGS = ['age', 'dday', 'discount', 'unit', 'bmi']
NEW_SLUGS = ['percent', 'percentchange', 'datediff', 'time', 'speed']
ALL_CALC_SLUGS = EXISTING_SLUGS + NEW_SLUGS

# 19 language codes as used in <html lang="...">, in the exact order the
# existing lang-modal grid lists them (extracted from the live site).
LANGS = ['ko', 'zh-CN', 'hi', 'en-US', 'id', 'pt-BR', 'ru', 'ur', 'es', 'ja',
         'en-NG', 'tl', 'ar', 'vi', 'de', 'bn', 'tr', 'fa', 'en-GB', 'th', 'fr']
# NOTE: en appears 3 times in the grid (US/UK/Nigeria) but is ONE folder "en".
# The 19 *folders* (unique langs) are:
FOLDER_LANGS = ['ko', 'zh-cn', 'hi', 'en', 'id', 'pt-br', 'ru', 'ur', 'es', 'ja',
                'tl', 'ar', 'vi', 'de', 'bn', 'tr', 'fa', 'th', 'fr']
# html lang attribute per folder (as already used on the live site)
HTML_LANG = {
    'ko': 'ko', 'zh-cn': 'zh-CN', 'hi': 'hi', 'en': 'en', 'id': 'id',
    'pt-br': 'pt-BR', 'ru': 'ru', 'ur': 'ur', 'es': 'es', 'ja': 'ja',
    'tl': 'tl', 'ar': 'ar', 'vi': 'vi', 'de': 'de', 'bn': 'bn', 'tr': 'tr',
    'fa': 'fa', 'th': 'th', 'fr': 'fr',
}
RTL_FOLDERS = {'ar', 'fa', 'ur'}

# The lang-modal grid rows exactly as they already appear on the live site
# (flag, country, langname, folder-target). Order matters (must match existing
# pages byte for byte so we don't disturb an already-shipped, verified block).
LANG_GRID_ROWS = [
    ('🇰🇷', 'South Korea', '한국어', 'ko'),
    ('🇨🇳', 'China', '简体中文', 'zh-cn'),
    ('🇮🇳', 'India', 'हिन्दी', 'hi'),
    ('🇺🇸', 'United States', 'English', 'en'),
    ('🇮🇩', 'Indonesia', 'Bahasa Indonesia', 'id'),
    ('🇧🇷', 'Brazil', 'Português', 'pt-br'),
    ('🇷🇺', 'Russia', 'Русский', 'ru'),
    ('🇵🇰', 'Pakistan', 'اردو', 'ur'),
    ('🇲🇽', 'Mexico', 'Español', 'es'),
    ('🇯🇵', 'Japan', '日本語', 'ja'),
    ('🇳🇬', 'Nigeria', 'English', 'en'),
    ('🇵🇭', 'Philippines', 'Filipino', 'tl'),
    ('🇪🇬', 'Egypt', 'العربية', 'ar'),
    ('🇻🇳', 'Vietnam', 'Tiếng Việt', 'vi'),
    ('🇩🇪', 'Germany', 'Deutsch', 'de'),
    ('🇧🇩', 'Bangladesh', 'বাংলা', 'bn'),
    ('🇹🇷', 'Turkiye', 'Türkçe', 'tr'),
    ('🇮🇷', 'Iran', 'فارسی', 'fa'),
    ('🇬🇧', 'United Kingdom', 'English', 'en'),
    ('🇹🇭', 'Thailand', 'ไทย', 'th'),
    ('🇫🇷', 'France', 'Français', 'fr'),
]

def depth_prefix(is_root, extra_depth=1):
    """Relative path prefix from a calculator page up to the site root.
    Root-language calc pages (e.g. /percent/) are depth 1 -> '../'
    Non-root-language calc pages (e.g. /en/percent/) are depth 2 -> '../../'
    """
    return '../' * extra_depth

def build_hreflang_block(calc_slug):
    """hreflang alternate tags for a calculator group, identical pattern to
    existing pages: self canonical is added by caller; this returns the full
    set of 19 hreflang + x-default lines, keyed by the *current* page path
    which caller substitutes href for."""
    lines = []
    for folder in FOLDER_LANGS:
        path = f"{DOMAIN}/{folder + '/' if folder != 'ko' else ''}{calc_slug}/"
        lines.append(f'<link rel="alternate" hreflang="{HTML_LANG[folder]}" href="{path}">')
    x_default = f"{DOMAIN}/en/{calc_slug}/"
    lines.append(f'<link rel="alternate" hreflang="x-default" href="{x_default}">')
    return '\n'.join(lines)

def build_lang_modal(folder, calc_slug, prefix):
    """Builds the exact lang-modal HTML block for a page living at
    <prefix>/<folder-or-root>/<calc_slug>/index.html, using the SAME markup
    shell already shipped (overlay/modal/fab ids) — only the lang-grid items'
    hrefs and 'current' marking vary."""
    items = []
    for flag, country, langname, target_folder in LANG_GRID_ROWS:
        if target_folder == 'ko':
            href = f"{prefix}{calc_slug}/"
        else:
            href = f"{prefix}{target_folder}/{calc_slug}/"
        cur = ' current' if target_folder == folder else ''
        items.append(
            f'<a class="lang-item{cur}" href="{href}"><span class="flag">{flag}</span>'
            f'<span class="names"><span class="country">{country}</span>'
            f'<span class="langname">{langname}</span></span></a>'
        )
    items_html = ''.join(items)
    return (
        '<div id="lang-modal-overlay" class="lang-modal-overlay" hidden>'
        '<div id="lang-modal" class="lang-modal" role="dialog" aria-modal="true" '
        'aria-labelledby="lang-modal-title" tabindex="-1">'
        '<div class="lang-modal-head">'
        '<h2 id="lang-modal-title" class="lang-modal-title"></h2>'
        '<button type="button" id="lang-modal-close" class="lang-modal-close">&times;</button>'
        '</div>'
        f'<div class="lang-grid">{items_html}</div>'
        '<label class="lang-modal-dontshow">'
        '<input type="checkbox" id="lang-dontshow-checkbox">'
        '<span id="lang-dontshow-label"></span>'
        '</label>'
        '</div></div>'
        '<button type="button" id="lang-fab" class="lang-fab">🌐 <span id="lang-fab-label"></span></button>'
    )

print("engine module loaded OK")
