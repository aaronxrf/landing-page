#!/usr/bin/env python3
"""Download NVD family-doctor spreadsheets from vmnvd.gov.lv.

Channel order depends on where it runs:
- GitHub Actions (datacenter IP): direct fetch first, proxies as fallback.
- Locally (residential/Latvian IP): proxies ONLY — vmnvd blocks direct requests
  from residential IPs (see AGENTS.md "Network history"). Page goes through
  r.jina.ai, binaries through allorigins/corsproxy. Never direct locally.
"""
import os
import re
import sys
import time
import urllib.parse
import urllib.request

import openpyxl

HERE = os.path.dirname(os.path.abspath(__file__))

PAGE_URL = "https://www.vmnvd.gov.lv/lv/gimenes-arsti-atbilstosi-teritorijam"
JINA = "https://r.jina.ai/"
CHANNELS = [
    "https://api.allorigins.win/raw?url={url}",   # may serve a cached copy
    "https://corsproxy.org/?{url}",               # currently behind a captcha
]
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
IN_CI = os.environ.get("GITHUB_ACTIONS") == "true"
# media URL + filename carried in the link's title attribute
LINK_RE = re.compile(
    r"https://www\.vmnvd\.gov\.lv/lv/media/(\d+)/download\?attachment \"([^\"]+\.xlsx)\""
)

FETCHED = set()


def direct(url, timeout=90):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def jina(url):
    for attempt in range(4):
        try:
            req = urllib.request.Request(JINA + url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as resp:
                return resp.read().decode("utf-8", "replace")
        except Exception as e:
            print(f"    jina try {attempt}: {type(e).__name__}: {e}", file=sys.stderr)
            time.sleep(8)
    return download_page_allorigins(url)


def download_page_allorigins(url):
    p = "https://api.allorigins.win/raw?url=" + urllib.parse.quote(url, safe="")
    req = urllib.request.Request(p, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read().decode("utf-8", "replace")


def fetch_page():
    # direct first only in CI; locally proxies only (residential IP is blocked)
    if IN_CI:
        try:
            page = direct(PAGE_URL).decode("utf-8", "replace")
            if LINK_RE.findall(page):
                return page
            print("    direct page: no xlsx links, trying proxies", file=sys.stderr)
        except Exception as e:
            print(f"    direct page failed: {type(e).__name__}: {e}", file=sys.stderr)
    return jina(PAGE_URL)


def download(url):
    # in CI try direct first, then proxies; locally proxies only
    targets = ([("direct", [url])] if IN_CI else []) + [
        (pattern, [pattern.format(url=urllib.parse.quote(url, safe=""))])
        for pattern in CHANNELS
    ]
    for name, urls in targets:
        for u in urls:
            for attempt in range(3):
                try:
                    req = urllib.request.Request(u, headers={"User-Agent": UA})
                    with urllib.request.urlopen(req, timeout=120) as resp:
                        data = resp.read()
                    if data[:2] == b"PK":  # xlsx = zip magic
                        return data
                    print(f"    not a zip ({len(data)} bytes), retrying", file=sys.stderr)
                except Exception as e:
                    print(f"    {name} try {attempt}: {type(e).__name__}: {e}", file=sys.stderr)
                time.sleep(5)
    raise RuntimeError(f"all channels failed for {url}")


def region_of(data):
    wb = openpyxl.load_workbook(data, read_only=True)
    return wb.sheetnames[0]


def main():
    page = fetch_page()
    links = sorted(set(LINK_RE.findall(page)))
    if not links:
        print("no xlsx links found on page", file=sys.stderr)
        sys.exit(1)
    print(f"{len(links)} xlsx links on page")
    for media_id, fname in links:
        url = f"https://www.vmnvd.gov.lv/lv/media/{media_id}/download?attachment"
        data = download(url)
        region = region_of(data)
        print(f"  {fname}: {len(data)} bytes, sheet {region}")
        if region in FETCHED:
            print(f"    duplicate region {region}, skipping")
            continue
        FETCHED.add(region)
        with open(os.path.join(HERE, fname), "wb") as f:
            f.write(data)
        print(f"    saved {fname}")


if __name__ == "__main__":
    main()
