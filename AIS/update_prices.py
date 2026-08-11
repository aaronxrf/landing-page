#!/usr/bin/env python3
"""Refresh data/prices.json (the static fuel/electricity price snapshot) without a backend.

Pulls from cenometrs.lv public JSON APIs (server-side, no CORS issue):
  - fuel:  GET /api/prices/latest  (Neste preferred, cheapest 95/diesel fallback)
  - elec:  GET /api/ev/latest      (cheapest DC price in EUR/kWh)
Fallback for fuel: fuel-prices.eu llms.txt. Needs no pip (stdlib urllib only).

Run from AIS/:
    python3 update_prices.py          # prints result, writes data/prices.json
    python3 update_prices.py --quiet  # no output on success
Commit the updated file to refresh the site. GitHub Actions runs this daily.
"""
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CACHE_FILE = ROOT / "data" / "prices.json"

CENOMETRS_PRICES_URL = "https://www.cenometrs.lv/api/prices/latest"
CENOMETRS_EV_URL = "https://www.cenometrs.lv/api/ev/latest"
FUEL_PRICED_EU_URL = "https://www.fuel-prices.eu/Latvia/llms.txt"

NESTE_TYPE_MAP = {
    "Neste Futura 95": "petrol",
    "Neste Futura 98": "petrol_98",
    "Neste Futura D": "diesel",
    "Neste Pro Diesel": "diesel_premium",
}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read().decode("utf-8")


def fetch_json(url):
    return json.loads(get(url))


def fetch_fuel_prices():
    rows = fetch_json(CENOMETRS_PRICES_URL)
    prices = {}
    for row in rows:
        key = NESTE_TYPE_MAP.get(row.get("type"))
        if key and key not in prices:
            prices[key] = row["price"]
    if "petrol" not in prices:
        petrol = [r for r in rows if r.get("type") == "95"]
        if petrol:
            prices["petrol"] = min(r["price"] for r in petrol)
    if "diesel" not in prices:
        diesel = [r for r in rows if r.get("type") == "diesel"]
        if diesel:
            prices["diesel"] = min(r["price"] for r in diesel)
    if "petrol" not in prices or "diesel" not in prices:
        raise ValueError("no petrol/diesel prices on cenometrs.lv")
    return prices


def fetch_elec_price():
    rows = fetch_json(CENOMETRS_EV_URL)
    dc = [r for r in rows if r.get("tier") == "DC" and r.get("unit") == "€/kWh"]
    if not dc:
        raise ValueError("no DC EUR/kWh charging prices on cenometrs.lv")
    return min(r["price"] for r in dc)


def fallback_fuel_prices():
    text = get(FUEL_PRICED_EU_URL)
    petrol = re.search(r"Euro 95\s+€([\d.]+)", text)
    diesel = re.search(r"^Diesel\s+€([\d.]+)", text, re.M)
    if not petrol or not diesel:
        raise ValueError("fuel-prices.eu format changed")
    return {"petrol": float(petrol.group(1)), "diesel": float(diesel.group(1))}


def main():
    result = {"prices": None, "source": None, "timestamp": int(time.time()), "fallback": None, "error": None}
    for name, fetcher in (("cenometrs.lv", fetch_fuel_prices), ("fuel-prices.eu", fallback_fuel_prices)):
        try:
            result["prices"] = fetcher()
            result["source"] = name
            result["fallback"] = name != "cenometrs.lv"
            break
        except Exception as exc:
            result["error"] = f"{name}: {exc}"
    if result["prices"]:
        try:
            result["prices"]["elec"] = fetch_elec_price()
        except Exception as exc:
            result["error"] = (result["error"] + "; " if result["error"] else "") + f"elec: {exc}"
    if result["prices"]:
        CACHE_FILE.write_text(json.dumps(result, ensure_ascii=False, indent=2))
    if "--quiet" not in sys.argv:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    sys.exit(0 if result["prices"] else 1)


if __name__ == "__main__":
    main()
