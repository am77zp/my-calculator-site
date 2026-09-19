#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Updates the 116 pre-existing pages:
  - nav (main-nav) gets the 5 new calculator links added, preserving the
    active-class logic and all existing hrefs/labels for the original 5
    calculators (+ Home, + About on root).
  - asset version query strings bumped 20260919-1 -> 20260919-2.
  - the 19 home pages' .home-grid and "popular calculators" <ul> get the
    5 new calculators appended.
Nothing else in these files is touched: card/content sections of the
existing 5 calculator pages, about/privacy body content, and all other
markup are left byte-for-byte identical.
"""
import os, re, json, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

from engine import FOLDER_LANGS, ALL_CALC_SLUGS, NEW_SLUGS, VERSION
from content_percent import PERCENT
from content_percentchange import PERCENTCHANGE
from content_datediff import DATEDIFF
from content_time import TIME
from content_speed import SPEED

with open(os.path.join(HERE, 'chrome.json'), encoding='utf-8') as f:
    CHROME = json.load(f)

ABOUT_LABEL_KO = "소개"
CALC_CONTENTS = {
    'percent': PERCENT, 'percentchange': PERCENTCHANGE, 'datediff': DATEDIFF,
    'time': TIME, 'speed': SPEED,
}

def title_short(title):
    return title.split(' - ')[0]

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
        labels[seg[-1]] = text
    return labels

NAV_LABELS = {}
for folder in FOLDER_LANGS:
    NAV_LABELS[folder] = existing_nav_labels(folder)
    for slug, content in CALC_CONTENTS.items():
        NAV_LABELS[folder][slug] = content[folder]['nav']

def build_nav_for_calc(folder, prefix, active_slug):
    """active_slug: one of ALL_CALC_SLUGS, or 'about', or None (privacy)."""
    home_href = prefix if folder == 'ko' else prefix + folder + '/'
    parts = [f'<a href="{home_href}" class="">{CHROME[folder]["home_label"]}</a>']
    for s in ALL_CALC_SLUGS:
        href = (prefix + s + '/') if folder == 'ko' else (prefix + folder + '/' + s + '/')
        cls = 'active' if s == active_slug else ''
        parts.append(f'<a href="{href}" class="{cls}">{NAV_LABELS[folder][s]}</a>')
    if folder == 'ko':
        cls = 'active' if active_slug == 'about' else ''
        parts.append(f'<a href="{prefix}about/" class="{cls}">{ABOUT_LABEL_KO}</a>')
    return '<nav class="main-nav">' + ''.join(parts) + '</nav>'

def build_nav_for_home(folder):
    home_prefix = '' if folder == 'ko' else '../'
    home_href = './' if folder == 'ko' else home_prefix + folder + '/'
    parts = [f'<a href="{home_href}" class="active">{CHROME[folder]["home_label"]}</a>']
    for s in ALL_CALC_SLUGS:
        href = (s + '/') if folder == 'ko' else (home_prefix + folder + '/' + s + '/')
        parts.append(f'<a href="{href}" class="">{NAV_LABELS[folder][s]}</a>')
    if folder == 'ko':
        parts.append(f'<a href="about/" class="">{ABOUT_LABEL_KO}</a>')
    return '<nav class="main-nav">' + ''.join(parts) + '</nav>'

def bump_version(html):
    return html.replace('?v=20260919-1', f'?v={VERSION}')

def replace_nav(html, new_nav):
    return re.sub(r'<nav class="main-nav">.*?</nav>', lambda m: new_nav, html, count=1, flags=re.S)

def update_calc_or_static_page(path, folder, active_slug, prefix):
    with open(path, encoding='utf-8') as f:
        html = f.read()
    new_nav = build_nav_for_calc(folder, prefix, active_slug)
    html2 = replace_nav(html, new_nav)
    html2 = bump_version(html2)
    if html2 != html:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html2)
        return True
    return False

def update_home_page(folder):
    path = os.path.join(ROOT, '' if folder == 'ko' else folder, 'index.html')
    with open(path, encoding='utf-8') as f:
        html = f.read()
    new_nav = build_nav_for_home(folder)
    html2 = replace_nav(html, new_nav)
    html2 = bump_version(html2)

    home_prefix = '' if folder == 'ko' else '../'
    def calc_href(slug):
        return (slug + '/') if folder == 'ko' else (home_prefix + folder + '/' + slug + '/')

    # Append new tool-cards before the home-grid's closing </div>
    cards_html = ''
    list_html = ''
    for slug in NEW_SLUGS:
        c = CALC_CONTENTS[slug][folder]
        t = title_short(c['title'])
        desc = c['home_desc']
        href = calc_href(slug)
        cards_html += f'<a class="tool-card" href="{href}"><div class="t">{t}</div><div class="d">{desc}</div></a>'
        list_html += f'<li><a href="{href}">{t}</a> &#8212; {desc}</li>'

    m = re.search(r'(<div class="home-grid">)(.*?)(</div>\s*<article class="content">)', html2, re.S)
    if not m:
        raise RuntimeError(f'home-grid not found in {path}')
    html2 = html2[:m.end(2)] + cards_html + html2[m.end(2):]

    # Re-search for the <ul> that holds the popular-calculators list (last <ul> before </article>)
    m2 = re.search(r'(<ul>)(.*?)(</ul>\s*</article>)', html2, re.S)
    if not m2:
        raise RuntimeError(f'popular list not found in {path}')
    html2 = html2[:m2.end(2)] + list_html + html2[m2.end(2):]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html2)

def main():
    updated = []
    for folder in FOLDER_LANGS:
        base = '' if folder == 'ko' else folder
        # 5 existing calculator pages
        for slug in ['age', 'dday', 'discount', 'unit', 'bmi']:
            path = os.path.join(ROOT, base, slug, 'index.html')
            prefix = '../' if folder == 'ko' else '../../'
            if update_calc_or_static_page(path, folder, slug, prefix):
                updated.append(path)
        # home page
        update_home_page(folder)
        updated.append(os.path.join(ROOT, base, 'index.html'))
    # about/privacy (root only)
    if update_calc_or_static_page(os.path.join(ROOT, 'about', 'index.html'), 'ko', 'about', '../'):
        updated.append('about/index.html')
    if update_calc_or_static_page(os.path.join(ROOT, 'privacy', 'index.html'), 'ko', None, '../'):
        updated.append('privacy/index.html')
    print(f"Updated {len(updated)} existing pages")

if __name__ == '__main__':
    main()
