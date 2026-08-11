const { breakEven } = require("./static/app.js");
const assert = require("assert");

// breakEven(aPrice, aFuelKm, aOverKm, bPrice, bFuelKm, bOverKm, maxKm, r=0, annual=15000)
// r=0 (no fuel-price growth) must match the linear model.
// More expensive upfront, cheaper to run: total costs equal at 250k km
assert.strictEqual(breakEven(30000, 0.06, 0.02, 35000, 0.04, 0.02, 300000), 250000, "premium repaid by running savings");
// Dominated car (pricier upfront AND pricier to run): never crosses
assert.strictEqual(breakEven(30000, 0.04, 0.02, 35000, 0.06, 0.02, 300000), null, "dominated never breaks even");
// No price difference, same running cost
assert.strictEqual(breakEven(30000, 0.04, 0.02, 30000, 0.04, 0.02, 300000), null, "nothing to pay back");
// Crossing beyond maxKm is out of range
assert.strictEqual(breakEven(30000, 0.06, 0.02, 35000, 0.04, 0.02, 100000), null, "beyond maxKm");
// Symmetric case, crossing is direction-independent
assert.strictEqual(breakEven(35000, 0.04, 0.02, 30000, 0.06, 0.02, 300000), 250000, "symmetric crossing");
// Same running cost, price differs: never
assert.strictEqual(breakEven(30000, 0.04, 0.02, 35000, 0.04, 0.02, 300000), null, "same running cost");
// Equal price, cheaper runner: pays back immediately (crossing at 0)
assert.strictEqual(breakEven(30000, 0.06, 0.02, 30000, 0.04, 0.02, 300000), 0, "equal price, better runner");

// 5%/yr fuel growth: the fuel gap widens, so the crossing comes sooner than the
// linear 250k km. Exact value: diff(m)=5000-0.02*K(m), K=annual/r*(e^(r m/annual)-1)
// => K=250000 => e^(m/300000)=11/6 => m=300000*ln(11/6)≈181841.
assert.strictEqual(breakEven(30000, 0.06, 0.02, 35000, 0.04, 0.02, 300000, 0.05, 15000), 181841, "growth pulls crossing earlier");
// Higher overhead on the cheaper-to-fuel car can still flip dominance with growth:
// b cheaper to fuel but pricier overhead; linear says never, growth must too when
// overhead dominates at all ranges.
assert.strictEqual(breakEven(30000, 0.04, 0.02, 35000, 0.02, 0.06, 300000, 0.05, 15000), null, "overhead-gap dominates");

console.log("payback tests OK");
