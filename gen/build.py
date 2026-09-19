#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the 95 new calculator pages (5 slugs x 19 languages) using
engine.py conventions, gen/chrome.json site-chrome strings, and the
gen/content_*.py per-calculator localized content dicts.
"""
import os, re, json, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from engine import (DOMAIN, VERSION, EXISTING_SLUGS, NEW_SLUGS, ALL_CALC_SLUGS,
                    FOLDER_LANGS, HTML_LANG, RTL_FOLDERS, LANG_GRID_ROWS,
                    build_hreflang_block, build_lang_modal)
from content_percent import PERCENT
from content_percentchange import PERCENTCHANGE
from content_datediff import DATEDIFF
from content_time import TIME
from content_speed import SPEED

with open(os.path.join(HERE, 'chrome.json'), encoding='utf-8') as f:
    CHROME = json.load(f)

MODE_LABEL = {
 'ko': "계산 방식", 'en': "Calculation mode", 'ja': "計算方法", 'zh-cn': "计算方式",
 'hi': "गणना का तरीका", 'id': "Mode perhitungan", 'pt-br': "Modo de cálculo",
 'ru': "Режим расчёта", 'ur': "حساب کا طریقہ", 'es': "Modo de cálculo",
 'tl': "Paraan ng pagkalkula", 'ar': "طريقة الحساب", 'vi': "Chế độ tính",
 'de': "Rechenmodus", 'bn': "হিসাবের পদ্ধতি", 'tr': "Hesaplama yöntemi",
 'fa': "حالت محاسبه", 'th': "โหมดการคำนวณ", 'fr': "Mode de calcul",
}
BUTTON_LABEL = {
 'ko': "계산하기", 'en': "Calculate", 'ja': "計算する", 'zh-cn': "计算",
 'hi': "गणना करें", 'id': "Hitung", 'pt-br': "Calcular", 'ru': "Рассчитать",
 'ur': "حساب کریں", 'es': "Calcular", 'tl': "Kalkulahin", 'ar': "احسب",
 'vi': "Tính", 'de': "Berechnen", 'bn': "হিসাব করুন", 'tr': "Hesapla",
 'fa': "محاسبه", 'th': "คำนวณ", 'fr': "Calculer",
}
PRIVACY_LABEL_KO = "개인정보처리방침"
ABOUT_LABEL_KO = "소개"

def depth_prefix(folder):
    return '../' if folder == 'ko' else '../../'

def existing_nav_labels(folder):
    path = os.path.join(ROOT, '' if folder == 'ko' else folder, 'age', 'index.html')
    with open(path, encoding='utf-8') as f:
        html = f.read()
    m = re.search(r'<nav class="main-nav">(.*?)</nav>', html, re.S)
    nav_html = m.group(1)
    items = re.findall(r'<a href="([^"]+)" class="[^"]*">([^<]*)</a>', nav_html)
    labels = {}
    for href, text in items:
        seg = [s for s in href.split('/') if s and s != '.']
        if not seg:
            continue
        slug = seg[-1]
        labels[slug] = text
    return labels

NAV_LABELS = {}
for folder in FOLDER_LANGS:
    NAV_LABELS[folder] = existing_nav_labels(folder)

CALC_CONTENTS = {
    'percent': PERCENT, 'percentchange': PERCENTCHANGE, 'datediff': DATEDIFF,
    'time': TIME, 'speed': SPEED,
}
for slug, content in CALC_CONTENTS.items():
    for folder in FOLDER_LANGS:
        NAV_LABELS[folder][slug] = content[folder]['nav']

def build_nav(folder, slug, prefix):
    home_href = prefix if folder == 'ko' else prefix + folder + '/'
    parts = [f'<a href="{home_href}" class="">{CHROME[folder]["home_label"]}</a>']
    for s in ALL_CALC_SLUGS:
        href = (prefix + s + '/') if folder == 'ko' else (prefix + folder + '/' + s + '/')
        cls = 'active' if s == slug else ''
        parts.append(f'<a href="{href}" class="{cls}">{NAV_LABELS[folder][s]}</a>')
    if folder == 'ko':
        parts.append(f'<a href="{prefix}about/" class="">{ABOUT_LABEL_KO}</a>')
    return '<nav class="main-nav">' + ''.join(parts) + '</nav>'

def title_short(title):
    return title.split(' - ')[0]

# ---- per-calculator field HTML + I18N key builders ----

def percent_fields(folder, c):
    opts = c['mode_options']
    mode_html = ''.join(f'<option value="{i}">{opts[i]}</option>' for i in range(len(opts)))
    lbl = c['labels']
    return (
      f'<div class="row"><div class="field"><label>{MODE_LABEL[folder]}</label>'
      f'<select id="percent-mode">{mode_html}</select></div></div>'
      f'<div class="row"><div class="field"><label>{lbl["a"]}</label><input type="number" id="percent-a"></div>'
      f'<div class="field"><label>{lbl["b"]}</label><input type="number" id="percent-b"></div></div>'
    )

def percent_i18n(c):
    return {"percent_alert": c["alert"], "percent_result_tpl": c["result_tpl"]}

def percentchange_fields(folder, c):
    opts = c['mode_options']
    lbl = c['labels']
    return (
      f'<div class="row"><div class="field"><label>{MODE_LABEL[folder]}</label>'
      f'<select id="pc-mode" onchange="pcToggleMode()">'
      f'<option value="diff">{opts[0]}</option><option value="apply">{opts[1]}</option></select></div></div>'
      f'<div class="row" id="pc-group-diff">'
      f'<div class="field"><label>{lbl["before"]}</label><input type="number" id="pc-before"></div>'
      f'<div class="field"><label>{lbl["after"]}</label><input type="number" id="pc-after"></div></div>'
      f'<div class="row" id="pc-group-apply" hidden>'
      f'<div class="field"><label>{lbl["base"]}</label><input type="number" id="pc-base"></div>'
      f'<div class="field"><label>{lbl["percent"]}</label><input type="number" id="pc-percent"></div></div>'
    )

def percentchange_i18n(c):
    return {
      "percentchange_alert": c["alert"], "percentchange_result_tpl": c["result_tpl"],
      "percentchange_dir_up": c["dir_up"], "percentchange_dir_down": c["dir_down"],
      "percentchange_dir_same": c["dir_same"],
    }

def datediff_fields(folder, c):
    lbl = c['labels']
    return (
      f'<div class="row"><div class="field"><label>{lbl["start"]}</label><input type="date" id="dd-start"></div>'
      f'<div class="field"><label>{lbl["end"]}</label><input type="date" id="dd-end"></div></div>'
    )

def datediff_i18n(c):
    rt = c["result_tpl"]
    return {
      "datediff_alert": c["alert"], "datediff_days_tpl": rt["days"],
      "datediff_weeks_tpl": rt["weeks"], "datediff_ymd_tpl": rt["ymd"],
      "datediff_same": rt["same"],
    }

def time_fields(folder, c):
    mo = c['mode_options']
    lbl = c['labels']
    op = c['op_options']
    return (
      f'<div class="row"><div class="field"><label>{MODE_LABEL[folder]}</label>'
      f'<select id="tm-mode" onchange="timeToggleMode()">'
      f'<option value="elapsed">{mo[0]}</option><option value="addsub">{mo[1]}</option></select></div></div>'
      f'<div class="row" id="tm-group-elapsed">'
      f'<div class="field"><label>{lbl["start"]}</label><input type="time" id="tm-start"></div>'
      f'<div class="field"><label>{lbl["end"]}</label><input type="time" id="tm-end"></div></div>'
      f'<div class="row" id="tm-group-addsub" hidden>'
      f'<div class="field"><label>{lbl["base"]}</label><input type="time" id="tm-base"></div>'
      f'<div class="field"><label>{lbl["dur"]}</label>'
      f'<input type="number" id="tm-dur-h" min="0" style="width:47%;display:inline-block"> : '
      f'<input type="number" id="tm-dur-m" min="0" max="59" style="width:47%;display:inline-block"></div>'
      f'<div class="field"><label>{lbl["op"]}</label><select id="tm-op">'
      f'<option value="add">{op[0]}</option><option value="sub">{op[1]}</option></select></div></div>'
    )

def time_i18n(c):
    rt = c["result_tpl"]
    return {
      "time_alert": c["alert"], "time_elapsed_tpl": rt["elapsed"],
      "time_elapsed_next_tpl": rt["elapsed_next"], "time_addsub_tpl": rt["addsub"],
      "time_addsub_next_tpl": rt["addsub_next"], "time_addsub_prev_tpl": rt["addsub_prev"],
    }

def speed_fields(folder, c):
    mo = c['mode_options']
    lbl = c['labels']
    return (
      f'<div class="row"><div class="field"><label>{MODE_LABEL[folder]}</label>'
      f'<select id="sp-mode" onchange="spToggleMode()">'
      f'<option value="speed">{mo[0]}</option><option value="distance">{mo[1]}</option>'
      f'<option value="time">{mo[2]}</option></select></div></div>'
      f'<div class="row">'
      f'<div class="field" id="sp-field-distance"><label>{lbl["distance"]}</label><input type="number" id="sp-distance"></div>'
      f'<div class="field" id="sp-field-time"><label>{lbl["time"]}</label><input type="text" id="sp-time"></div>'
      f'<div class="field" id="sp-field-speed" hidden><label>{lbl["speed"]}</label><input type="number" id="sp-speed"></div>'
      f'</div>'
    )

def speed_i18n(c):
    return {"speed_alert": c["alert"], "speed_result_tpl": c["result_tpl"]}

CALC_DEFS = {
    'percent':       dict(content=PERCENT,        result_id='percent-result', fields=percent_fields,       i18n=percent_i18n,       func_ko='calcPercent',       func_global='calcPercentGlobal'),
    'percentchange': dict(content=PERCENTCHANGE,  result_id='pc-result',      fields=percentchange_fields, i18n=percentchange_i18n, func_ko='calcPercentChange', func_global='calcPercentChangeGlobal'),
    'datediff':      dict(content=DATEDIFF,       result_id='dd-result',     fields=datediff_fields,      i18n=datediff_i18n,      func_ko='calcDateDiff',      func_global='calcDateDiffGlobal'),
    'time':          dict(content=TIME,           result_id='tm-result',     fields=time_fields,          i18n=time_i18n,          func_ko='calcTime',          func_global='calcTimeGlobal'),
    'speed':         dict(content=SPEED,          result_id='sp-result',     fields=speed_fields,         i18n=speed_i18n,         func_ko='calcSpeed',         func_global='calcSpeedGlobal'),
}

def build_page(slug, folder):
    d = CALC_DEFS[slug]
    c = d['content'][folder]
    chrome = CHROME[folder]
    is_ko = (folder == 'ko')
    prefix = depth_prefix(folder)
    html_lang = HTML_LANG[folder]
    dir_attr = ' dir="rtl"' if folder in RTL_FOLDERS else ''
    canonical = f"{DOMAIN}/{'' if is_ko else folder + '/'}{slug}/"
    hreflang = build_hreflang_block(slug)
    lang_modal = build_lang_modal(folder, slug, prefix)
    nav_html = build_nav(folder, slug, prefix)
    home_href = prefix if is_ko else prefix + folder + '/'
    t_short = title_short(c['title'])

    fields_html = d['fields'](folder, c)
    func_name = d['func_ko'] if is_ko else d['func_global']

    usage_lis = ''.join(f'<li>{u}</li>' for u in c['usage'])
    examples_html = ''.join(f'<div class="example">{e}</div>' for e in c['examples'])
    faq_html = ''.join(f'<div class="faq-item"><div class="q">{q}</div><p class="a">{a}</p></div>' for q, a in c['faq'])

    other_slugs = [s for s in ALL_CALC_SLUGS if s != slug]
    related_links = ''.join(
        f'<a href="{(prefix + s + "/") if is_ko else (prefix + folder + "/" + s + "/")}">{NAV_LABELS[folder][s]}</a>'
        for s in other_slugs
    )

    i18n_script = ''
    if not is_ko:
        i18n_obj = d['i18n'](c)
        i18n_script = f'<script>window.I18N = {json.dumps(i18n_obj, ensure_ascii=False)};</script>\n'

    if is_ko:
        footer_extra = f'<br>\n  <a href="{prefix}about/">{ABOUT_LABEL_KO}</a> · <a href="{prefix}privacy/">{PRIVACY_LABEL_KO}</a>'
    else:
        footer_extra = ''

    html = f'''<!DOCTYPE html>
<html lang="{html_lang}"{dir_attr}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{c['title']}</title>
<meta name="description" content="{c['meta']}">
<link rel="canonical" href="{canonical}">
{hreflang}
<link rel="stylesheet" href="{prefix}assets/style.css?v={VERSION}">
{i18n_script}</head>
<body>
<header class="site-header">
  <h1><a href="{home_href}">{chrome['site_title']}</a></h1>
  <p>{chrome['tagline']}</p>
</header>
{nav_html}{lang_modal}
<div class="breadcrumb"><a href="{home_href}">{chrome['breadcrumb_home']}</a> &gt; {t_short}</div><div class="container">
  <div class="ad-slot">{chrome['ad_slot']}</div>
  <div class="card">
    <h2>{t_short}</h2>
    <p class="desc">{c['card_desc']}</p>
    {fields_html}
    <button onclick="{func_name}()">{BUTTON_LABEL[folder]}</button>
    <div class="result" id="{d['result_id']}"></div>
  </div>
  <article class="content">
    <h2>{chrome['heading_usage']}</h2><ol>{usage_lis}</ol>
    <h2>{chrome['heading_method']}</h2><p>{c['method']}</p>
    <h2>{chrome['heading_examples']}</h2>{examples_html}
    <h2>{chrome['heading_faq']}</h2>{faq_html}
    <h2>{chrome['heading_related']}</h2><div class="related">{related_links}</div>
  </article>
</div>
<footer>
  {chrome['footer_main']}{footer_extra}
</footer>
<script src="{prefix}assets/calculators.js?v={VERSION}"></script>
<script src="{prefix}assets/i18n.js?v={VERSION}"></script>
</body>
</html>
'''
    return html

def main():
    count = 0
    for slug in NEW_SLUGS:
        for folder in FOLDER_LANGS:
            page = build_page(slug, folder)
            out_dir = os.path.join(ROOT, '' if folder == 'ko' else folder, slug)
            os.makedirs(out_dir, exist_ok=True)
            out_path = os.path.join(out_dir, 'index.html')
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(page)
            count += 1
    print(f"Generated {count} pages")

if __name__ == '__main__':
    main()
