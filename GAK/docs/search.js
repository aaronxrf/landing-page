"use strict";

const normalize = s => String(s).toLowerCase().replace(/\s+/g, " ").trim();
const alnum = s => s.replace(/[^a-z0-9]/g, "");

const postalCode = q => {
  const m = alnum(normalize(q)).match(/lv(\d{4})/);
  return m ? "LV-" + m[1] : null;
};

const haversineKm = (a, b) => {
  const R = 6371;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
};

const matchLocations = (query, locations) => {
  const q = normalize(query);
  if (!q) return [];
  const code = postalCode(q);
  if (code) {
    const norm = alnum(code);
    return locations.filter(l => alnum(normalize(l.address)).includes(norm));
  }
  return locations.filter(l => normalize(l.address).includes(q));
};

const nearestLocations = (lat, lng, locations, n = 10) =>
  locations
    .map(l => ({ loc: l, dist: haversineKm({ lat, lng }, l) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, n)
    .map(x => Object.assign({}, x.loc, { dist: x.dist }));

if (typeof module !== "undefined" && module.exports) {
  module.exports = { normalize, postalCode, haversineKm, matchLocations, nearestLocations };
}
