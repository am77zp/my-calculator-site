#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Extract the reusable site 'chrome' strings per language from the existing,
already-shipped pages, so new-calculator pages reuse the exact same wording
(site title, tagline, footer, nav Home label, section headings, ad-slot text)
instead of us re-typing/re-translating things that already exist and are correct.
"""
import os, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOLDER_LANGS = ['ko', 'zh-cn', 'hi', 'en', 'id', 'pt-br', 'ru', 'ur', 'es', 'ja',
                'tl', 'ar', 'vi', 'de', 'bn', 'tr', 'fa', 'th', 'fr']

def folder_path(folder):
    return folder if folder != 'ko' else ''

chrome = {}
for folder in FOLDER_LANGS:
    path = os.path.join(ROOT, folder_path(folder), 'age', 'index.html') if folder != 'ko' \
        else os.path.join(ROOT, 'age', 'index.html')
    with open(path, encoding='utf-8') as f:
        html = f.read()

    site_title = re.search(r'<h1><a href="[^"]*">([^<]+)</a></h1>', html).group(1)
    tagline = re.search(r'</h1>\s*<p>([^<]+)</p>', html).group(1)
    home_label = re.search(r'<nav class="main-nav"><a href="[^"]*"[^>]*>([^<]+)</a>', html).group(1)
    breadcrumb_home = re.search(r'<div class="breadcrumb"><a href="[^"]*">([^<]+)</a>', html).group(1)
    ad_slot = re.search(r'<div class="ad-slot">([^<]+)</div>', html).group(1)
    headings = re.findall(r'<article class="content">.*?</article>', html, re.DOTALL)[0]
    h2s = re.findall(r'<h2>([^<]+)</h2>', headings)
    # order: usage, method, examples, faq, related  (age page has exactly 5 h2s)
    heading_usage, heading_method, heading_examples, heading_faq, heading_related = h2s[:5]
    footer_m = re.search(r'<footer>(.*?)</footer>', html, re.DOTALL).group(1)
    footer_main = footer_m.split('<br>')[0].strip()
    disclaimer = None
    dm = re.search(r'<p class="disclaimer">([^<]+)</p>', html)
    if dm:
        disclaimer = dm.group(1)

    chrome[folder] = {
        'site_title': site_title,
        'tagline': tagline,
        'home_label': home_label,
        'breadcrumb_home': breadcrumb_home,
        'ad_slot': ad_slot,
        'heading_usage': heading_usage,
        'heading_method': heading_method,
        'heading_examples': heading_examples,
        'heading_faq': heading_faq,
        'heading_related': heading_related,
        'footer_main': footer_main,
    }

out_path = os.path.join(ROOT, 'gen', 'chrome.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(chrome, f, ensure_ascii=False, indent=2)
print('wrote', out_path)
for k, v in chrome.items():
    print(k, '->', v['site_title'], '|', v['heading_usage'], '|', v['heading_faq'])
