"use strict";
const assert = require("assert");
const { postalCode, haversineKm, matchLocations, nearestLocations } = require("./search.js");

const d = haversineKm({ lat: 56.9496, lng: 24.1052 }, { lat: 56.9677, lng: 23.7695 });
assert.ok(d > 19 && d < 22, `Riga-Jurmala ~20.4 km, got ${d}`);

assert.strictEqual(postalCode("LV-2125"), "LV-2125");
assert.strictEqual(postalCode("lv2125"), "LV-2125");
assert.strictEqual(postalCode("LV- 1055"), "LV-1055");
assert.strictEqual(postalCode("olaine"), null);

const locs = [
  { lat: 56.741506, lng: 24.3896617, address: "Iecavas iela 4, Baldone, Ķekavas novads, LV-2125", doctors: [] },
  { lat: 56.87, lng: 24.61, address: "Rīgas iela 46A, Baldone, Ķekavas novads, LV-2125", doctors: [] },
  { lat: 56.795, lng: 24.03, address: "Zemgales iela 45A, Olaine, Olaines novads, LV-2114", doctors: [] },
  { lat: 56.94, lng: 24.1, address: "Meistaru iela 43-2, Valdlauči, LV1076", doctors: [] },
];

assert.strictEqual(matchLocations("LV-2125", locs).length, 2);
assert.strictEqual(matchLocations("LV1076", locs).length, 1);
assert.strictEqual(matchLocations("olaine", locs).length, 1);
assert.deepStrictEqual(matchLocations("Iecavas", locs).map(l => l.address), [locs[0].address]);
assert.strictEqual(matchLocations("", locs).length, 0);
assert.strictEqual(matchLocations("   ", locs).length, 0);

const near = nearestLocations(56.7415, 24.3896, locs, 2);
assert.strictEqual(near[0].address, locs[0].address);
assert.ok(near[0].dist < near[1].dist);
assert.strictEqual(near.length, 2);

console.log("search.js OK");
