const I18N = {
  en: {
    title: "Car Cost Comparator", petrolPrice: "Petrol, €/L", dieselPrice: "Diesel, €/L",
    elecPrice: "Electricity, €/kWh", annualKm: "Annual km", loading: "Loading fuel prices...",
    lpgPrice: "Gas (LPG), €/L", refresh: "Update prices online", add: "Add", remove: "✕", make: "Make", model: "Model",
    type: "Type", consumption: "Consumption", cost100: "Cost /100 km", cost1000: "Cost /1000 km",
    costKm: "Cost /1 km", annualCost: "Cost /year", co2: "CO2 g/km", price: "Price", eqLiters: "≈ petrol equiv.",
    eqLitersHint: "How many litres per 100 km a petrol car would burn to spend as much on fuel as this EV spends on electricity for 100 km. Lower = cheaper to run. Uses the current petrol price, so it changes if you edit it.",
    editHint: "Click the value to edit",
    cycleLabel: "Driving cycle", cycleCity: "City", cycleMixed: "Mixed", cycleHighway: "Highway",
    cycleHint: "How you drive affects fuel use: city = frequent stops (higher consumption), highway = steady speed. Pick the closest match.",
    fuelYoYHint: "Assumed yearly fuel price rise, used for break-even and total cost over years of ownership.",
    ownYearsHint: "How long you plan to keep the car, used for total cost and CO2 over ownership.",
    autoCalc: "Results recalculate automatically on change",
    maintenance: "Service /yr", insurance: "Insurance /yr", other: "Other /yr",
    fuelYoY: "Fuel price growth, %/yr", ownYears: "Ownership, years", yr: "yr",
    fuel: "Fuel", totalRunning: "Running total", grandTotal: "Grand total",
    co2Total: "CO2 over ownership, t", summary: "Cost over ownership",
    paybackNone: "No price difference to pay back.",
    payback: "Break-even between %1 and %2: %3 km (≈ %4 yr at %5 km/yr)",
    paybackNever: "%1 always cheaper to run: %2 never pays back",
    paybackFar: "No break-even within %1 km",
    source: "Source", updated: "Updated", chartPayback: "Payback of price difference",
    chart100: "Cost per 100 km", chartElec: "Electricity price sensitivity",
    cumulative: "Cumulative cost (price + running)", distanceKm: "Distance, km", totalCost: "Total cost, €",
    costPer100km: "€ per 100 km", electricityPrice: "€/kWh", petrolReference: "petrol/diesel ref.",
    l100: "L/100km", kwh100: "kWh/100km", petrol: "Petrol", diesel: "Diesel", hybrid: "Hybrid", ev: "Electric",
    lpg: "LPG", customToggle: "Add custom car", customName: "Make / model",
    customConsumption: "L/100km or kWh/100km", customPrice: "Price, €", customAdd: "Add", customCancel: "Cancel",
  },
  lv: {
    title: "Auto izmaksu salīdzinātājs", petrolPrice: "Benzīns, €/l", dieselPrice: "Dīzelis, €/l",
    elecPrice: "Elektrība, €/kWh", annualKm: "Gada nobraukums", loading: "Notiek degvielas cenu ielāde...",
    lpgPrice: "Gāze (LPG), €/l", refresh: "Atjaunināt cenas tiešsaistē", add: "Pievienot", remove: "✕", make: "Ražotājs", model: "Modelis",
    type: "Tips", consumption: "Patēriņš", cost100: "Izmaksas /100 km", cost1000: "Izmaksas /1000 km",
    costKm: "Izmaksas /1 km", annualCost: "Izmaksas /gadā", co2: "CO2 g/km", price: "Cena", eqLiters: "≈ benzīna ekv.",
    eqLitersHint: "Cik litru benzīna uz 100 km izmaksātu tikpat, cik šī elektroauto elektrība uz 100 km. Mazāk = lētāk ekspluatācijā. Aprēķins izmanto pašreizējo benzīna cenu, tāpēc vērtība mainās, ja to rediģē.",
    editHint: "Noklikšķiniet, lai rediģētu",
    cycleLabel: "Braukšanas cikls", cycleCity: "Pilsēta", cycleMixed: "Jaukts", cycleHighway: "Šoseja",
    cycleHint: "Braukšanas veids ietekmē patēriņu: pilsēta = bieži apstāšanās (lielāks patēriņš), šoseja = vienmērīgs ātrums. Izvēlieties tuvāko.",
    fuelYoYHint: "Pieņemtais degvielas cenas pieaugums gadā, izmantots atmaksāšanās un kopējo izmaksu aprēķinā.",
    ownYearsHint: "Cik ilgi plānojat paturēt auto — izmaksām un CO2 īpašuma laikā.",
    autoCalc: "Rezultāti pārrēķinās automātiski",
    maintenance: "Apkope /gadā", insurance: "Apdrošināšana /gadā", other: "Citi /gadā",
    fuelYoY: "Degvielas cenas pieaugums, %/gadā", ownYears: "Īpašuma laiks, gadi", yr: "g.",
    fuel: "Degviela", totalRunning: "Ekspluatācija kopā", grandTotal: "Kopā",
    co2Total: "CO2 īpašuma laikā, t", summary: "Izmaksas īpašuma laikā",
    paybackNone: "Nav cenu starpības, ko atpelnīt.",
    payback: "Līdzsvars starp %1 un %2: %3 km (≈ %4 gadi pie %5 km/gadā)",
    paybackNever: "%1 vienmēr lētāks ekspluatācijā: %2 neatpelnās",
    paybackFar: "Nav līdzsvara punkta %1 km robežās",
    source: "Avots", updated: "Atjaunots", chartPayback: "Cenu starpības atpelnīšana",
    chart100: "Izmaksas uz 100 km", chartElec: "Elektrības cenas jutīgums",
    cumulative: "Kumulatīvās izmaksas (cena + ekspluatācija)", distanceKm: "Nobraukums, km",
    totalCost: "Kopējās izmaksas, €", costPer100km: "€ uz 100 km", electricityPrice: "€/kWh",
    petrolReference: "benzīna/dīzeļa atsk.", l100: "l/100km", kwh100: "kWh/100km",
    petrol: "Benzīns", diesel: "Dīzelis", hybrid: "Hibrīds", ev: "Elektro",
    lpg: "Gāze (LPG)", customToggle: "Pievienot savu auto", customName: "Ražotājs / modelis",
    customConsumption: "l/100km vai kWh/100km", customPrice: "Cena, €", customAdd: "Pievienot", customCancel: "Atcelt",
  },
  ru: {
    title: "Портал сравнения авто", petrolPrice: "Бензин, €/л", dieselPrice: "Дизель, €/л",
    elecPrice: "Электричество, €/кВт·ч", annualKm: "Годовой пробег, км", loading: "Загрузка цен на топливо...",
    lpgPrice: "Газ (LPG), €/л", refresh: "Обновить цены из интернета", add: "Добавить", remove: "✕", make: "Производитель", model: "Модель",
    type: "Тип", consumption: "Расход", cost100: "Стоимость /100 км", cost1000: "Стоимость /1000 км",
    costKm: "Стоимость /1 км", annualCost: "Стоимость /год", co2: "CO2 г/км", price: "Цена", eqLiters: "≈ бенз. эквив.",
    eqLitersHint: "Сколько литров бензина на 100 км сожгла бы машина, чтобы потратить на топливо столько же, сколько этот электромобиль тратит на электричество за 100 км. Меньше = дешевле в эксплуатации. Считается по текущей цене бензина, поэтому меняется, если её отредактировать.",
    editHint: "Нажмите на значение, чтобы изменить",
    cycleLabel: "Цикл поездок", cycleCity: "Город", cycleMixed: "Смешанный", cycleHighway: "Трасса",
    cycleHint: "Стиль поездок влияет на расход: город = частые остановки (выше расход), трасса = стабильная скорость. Выберите ближайший.",
    fuelYoYHint: "Предполагаемый годовой рост цен на топливо, используется для окупаемости и общих расходов за срок владения.",
    ownYearsHint: "Сколько лет планируете владеть машиной — для общих расходов и CO2 за срок владения.",
    autoCalc: "Результаты пересчитываются автоматически",
    maintenance: "Обслуживание /год", insurance: "Страховка /год", other: "Прочее /год",
    fuelYoY: "Рост цены топлива, %/год", ownYears: "Срок владения, лет", yr: "лет",
    fuel: "Топливо", totalRunning: "Итого эксплуатация", grandTotal: "Итого",
    co2Total: "CO2 за срок владения, т", summary: "Расходы за срок владения",
    paybackNone: "Нет разницы в цене — окупать нечего.",
    payback: "Окупаемость разницы между %1 и %2: %3 км (≈ %4 г. при %5 км/год)",
    paybackNever: "%1 всегда дешевле в эксплуатации: %2 не окупится",
    paybackFar: "Окупаемость не наступает в пределах %1 км",
    source: "Источник", updated: "Обновлено", chartPayback: "Окупаемость разницы в цене",
    chart100: "Стоимость на 100 км", chartElec: "Чувствительность к цене эл-ва",
    cumulative: "Совокупные расходы (цена + эксплуатация)", distanceKm: "Пробег, км",
    totalCost: "Суммарные расходы, €", costPer100km: "€ на 100 км", electricityPrice: "€/кВт·ч",
    petrolReference: "бенз./диз. ориентир", l100: "л/100км", kwh100: "кВт·ч/100км",
    petrol: "Бензин", diesel: "Дизель", hybrid: "Гибрид", ev: "Электро",
    lpg: "Газ (LPG)", customToggle: "Своя машина", customName: "Марка / модель",
    customConsumption: "л/100км или кВт·ч/100км", customPrice: "Цена, €", customAdd: "Добавить", customCancel: "Отмена",
  },
};

let lang = typeof localStorage !== "undefined" ? (localStorage.getItem("lang") || "ru") : "ru";
const t = (k) => I18N[lang][k] || k;
const fmt = (n, d = 2) => Number(n).toLocaleString(lang === "en" ? "en-US" : "de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });

let cars = [];
let fuel = { prices: { petrol: 1.8, diesel: 1.7 }, source: "", error: null };
let selected = [];
let overrides = {};
let charts = {};
let customCars = loadCustom();

const CYCLE = {
  city:    { petrol: 1.25, diesel: 1.15, hybrid: 0.85, ev: 0.80, lpg: 1.25 },
  mixed:   { petrol: 1.00, diesel: 1.00, hybrid: 1.00, ev: 1.00, lpg: 1.00 },
  highway: { petrol: 0.85, diesel: 0.80, hybrid: 1.15, ev: 1.30, lpg: 0.85 },
};
const cycleFactor = () => CYCLE[$("cycle-select").value];

const $ = (id) => document.getElementById(id);

const num = (id, fb = 0) => {
  const v = parseFloat($(id).value);
  return Number.isFinite(v) && v > 0 ? v : fb;
};

const setupTooltip = () => {
  const tip = document.createElement("div");
  tip.id = "info-tip";
  tip.setAttribute("role", "tooltip");
  document.body.appendChild(tip);
  const show = el => {
    const r = el.getBoundingClientRect();
    tip.textContent = el.getAttribute("data-hint");
    tip.style.display = "block";
    tip.style.left = Math.max(8, Math.min(r.left + r.width / 2 - tip.offsetWidth / 2,
      innerWidth - tip.offsetWidth - 8)) + "px";
    tip.style.top = Math.max(8, r.top - tip.offsetHeight - 8) + "px";
  };
  const hide = () => { tip.style.display = "none"; };
  document.addEventListener("mouseover", e => {
    const el = e.target.closest && e.target.closest(".info");
    el ? show(el) : hide();
  });
  document.addEventListener("focusin", e => {
    const el = e.target.closest && e.target.closest(".info");
    if (el) show(el);
  });
  document.addEventListener("focusout", e => {
    if (e.target.closest && e.target.closest(".info")) hide();
  });
  addEventListener("scroll", hide, true);
  addEventListener("resize", hide);
};

async function init() {
  setupTooltip();
  $("fuel-source").textContent = t("loading");
  const [carsResp, fuelResp] = await Promise.all([fetch("data/cars.json"), fetch("data/prices.json")]);
  cars = (await carsResp.json()).cars;
  const f = await fuelResp.json();
  if (f.prices) {
    fuel = f;
    if (f.prices.petrol) $("petrol-price").value = f.prices.petrol;
    if (f.prices.diesel) $("diesel-price").value = f.prices.diesel;
    if (f.prices.elec) $("elec-price").value = f.prices.elec;
  }
  updateFuelLabel();
  buildMakeSelect();
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(x => x.classList.toggle("active", x.dataset.lang === lang));
  render();

  $("lang-switch").addEventListener("click", (e) => {
    const b = e.target.closest(".lang-btn");
    if (!b) return;
    lang = b.dataset.lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach(x => x.classList.toggle("active", x === b));
    render();
  });
  $("add-car").addEventListener("click", addSelectedCar);
  $("custom-toggle").addEventListener("click", () => {
    $("custom-form").style.display = $("custom-form").style.display === "none" ? "" : "none";
  });
  $("custom-cancel").addEventListener("click", () => { $("custom-form").style.display = "none"; });
  $("custom-add").addEventListener("click", addCustomCar);
  $("refresh-fuel").addEventListener("click", async () => {
    $("refresh-fuel").disabled = true;
    try {
      const f = await fetchLivePrices();
      if (f && f.prices) {
        fuel = f;
        $("petrol-price").value = f.prices.petrol;
        $("diesel-price").value = f.prices.diesel;
        if (f.prices.elec) $("elec-price").value = f.prices.elec;
      }
      updateFuelLabel(); render();
    } finally { $("refresh-fuel").disabled = false; }
  });
  ["petrol-price", "diesel-price", "elec-price", "lpg-price", "annual-km", "fuel-yoy", "ownership-years"].forEach(id =>
    $(id).addEventListener("input", () => {
      const v = parseFloat($(id).value);
      if (!Number.isFinite(v)) $(id).value = "";
      else if (v < 0) $(id).value = 0;
      render();
    }));
  $("cycle-select").addEventListener("change", render);
  $("make-select").addEventListener("change", buildModelSelect);
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest(".cell-display, .cell-edit");
    if (t) { startEdit(t, t.dataset.id, t.dataset.field, parseFloat(t.dataset.value)); return; }
    if (e.target.dataset && e.target.dataset.remove) removeCar(e.target.dataset.remove);
  });
}

function fmtWhen(ts) {
  const d = new Date(ts * 1000);
  const locale = lang === "en" ? "en-US" : "de-DE";
  const time = { hour: "2-digit", minute: "2-digit" };
  return d.toDateString() === new Date().toDateString()
    ? d.toLocaleTimeString(locale, time)
    : d.toLocaleString(locale, { day: "numeric", month: "short", ...time });
}

function updateFuelLabel() {
  const el = $("fuel-source");
  const when = fuel.timestamp ? fmtWhen(fuel.timestamp) : "";
  el.textContent = `${t("source")}: ${fuel.source || "—"} · ${t("updated")}: ${when}`;
  el.title = fuel.error || "";
}

const CENOMETRS_PRICES_URL = "https://www.cenometrs.lv/api/prices/latest";
const CENOMETRS_EV_URL = "https://www.cenometrs.lv/api/ev/latest";
const FUEL_PRICED_EU_URL = "https://www.fuel-prices.eu/Latvia/llms.txt";
const NESTE_TYPE_MAP = {
  "Neste Futura 95": "petrol",
  "Neste Futura D": "diesel",
};
const PROXIES = [
  (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
];

async function proxyFetch(url) {
  for (const proxy of PROXIES) {
    try {
      const resp = await fetch(proxy(url));
      if (!resp.ok) continue;
      const text = await resp.text();
      try { return JSON.parse(text); } catch (e) { return text; }
    } catch (e) { /* try next proxy */ }
  }
  return null;
}

function parseFuelPrices(rows) {
  const prices = {};
  for (const r of rows) {
    const key = NESTE_TYPE_MAP[r.type];
    if (key && !(key in prices)) prices[key] = r.price;
  }
  if (!("petrol" in prices)) {
    const p = rows.filter(r => r.type === "95").map(r => r.price);
    if (p.length) prices.petrol = Math.min(...p);
  }
  if (!("diesel" in prices)) {
    const d = rows.filter(r => r.type === "diesel").map(r => r.price);
    if (d.length) prices.diesel = Math.min(...d);
  }
  return ("petrol" in prices && "diesel" in prices) ? prices : null;
}

function parseElecPrice(rows) {
  const dc = rows.filter(r => r.tier === "DC" && r.unit === "€/kWh").map(r => r.price);
  return dc.length ? Math.min(...dc) : null;
}

function parseFuelEu(text) {
  const petrol = text.match(/Euro 95\s+€([\d.]+)/);
  const diesel = text.match(/^Diesel\s+€([\d.]+)/m);
  return (petrol && diesel) ? { petrol: +petrol[1], diesel: +diesel[1] } : null;
}

async function fetchLivePrices() {
  const rows = await proxyFetch(CENOMETRS_PRICES_URL);
  let prices = Array.isArray(rows) ? parseFuelPrices(rows) : null;
  let source = "cenometrs.lv";
  let elec = null;
  if (prices) {
    const ev = await proxyFetch(CENOMETRS_EV_URL);
    elec = Array.isArray(ev) ? parseElecPrice(ev) : null;
  } else {
    const text = await proxyFetch(FUEL_PRICED_EU_URL);
    prices = typeof text === "string" ? parseFuelEu(text) : null;
    if (!prices) {
      fuel.error = "live refresh failed, using snapshot";
      return null;
    }
    source = "fuel-prices.eu";
  }
  return {
    prices: Object.assign({}, prices, elec != null ? { elec } : {}),
    source,
    timestamp: Math.floor(Date.now() / 1000),
    error: null,
  };
}

function buildMakeSelect() {
  const makes = [...new Set(cars.map(c => c.make))].sort();
  $("make-select").innerHTML = makes.map(m => `<option>${m}</option>`).join("");
  buildModelSelect();
}

function buildModelSelect() {
  const make = $("make-select").value;
  $("model-select").innerHTML = cars.filter(c => c.make === make)
    .map(c => `<option value="${c.id}">${c.model}</option>`).join("");
}

function addSelectedCar() {
  const id = $("model-select").value;
  if (!selected.includes(id)) selected.push(id);
  render();
}

function removeCar(id) {
  selected = selected.filter(x => x !== id);
  delete overrides[id];
  const i = customCars.findIndex(c => c.id === id);
  if (i !== -1) { customCars.splice(i, 1); saveCustom(); }
  render();
}

function fuelPriceFor(car) {
  const key = car.type === "diesel" ? "diesel-price"
    : car.type === "lpg" ? "lpg-price" : "petrol-price";
  const fb = car.type === "diesel" ? (fuel.prices.diesel || fuel.prices.petrol || 1.7)
    : car.type === "lpg" ? (fuel.prices.lpg || fuel.prices.petrol || 0.8)
    : (fuel.prices.petrol || 1.8);
  return num(key, fb);
}

function per100km(car, overrides) {
  const p = overrides || {};
  const f = cycleFactor()[car.type];
  if (car.type === "ev") return car.kwh100 * f * (p.elec != null ? p.elec : num("elec-price", fuel.prices.elec != null ? fuel.prices.elec : 0.35));
  const fp = p.fuel != null ? p.fuel : fuelPriceFor(car);
  return car.l100 * f * fp;
}

function co2For(car) {
  if (car.type === "ev") return 0;
  const factor = car.type === "diesel" ? 26.6 : car.type === "lpg" ? 15.5 : 23.2;
  return Math.round(car.l100 * cycleFactor()[car.type] * factor);
}

const carById = (id) => {
  const c = cars.find(x => x.id === id) || customCars.find(x => x.id === id);
  return c ? Object.assign({}, c, overrides[id] || {}) : c;
};

function loadCustom() {
  if (typeof localStorage === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("ais_custom")) || []; } catch { return []; }
}
const saveCustom = () => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem("ais_custom", JSON.stringify(customCars));
};

function addCustomCar() {
  const name = $("custom-name").value.trim().split(/\s+/).filter(Boolean);
  const type = $("custom-type").value;
  const cons = parseFloat($("custom-cons").value);
  const price = parseFloat($("custom-price").value);
  if (name.length < 2 || !Number.isFinite(cons) || cons <= 0 || !Number.isFinite(price) || price < 0) return;
  const car = {
    id: "custom_" + Date.now(),
    make: name[0],
    model: name.slice(1).join(" "),
    type,
    price,
    ...(type === "ev" ? { kwh100: cons } : { l100: cons }),
  };
  customCars.push(car);
  saveCustom();
  selected.push(car.id);
  $("custom-name").value = "";
  $("custom-cons").value = "";
  $("custom-price").value = "";
  $("custom-form").style.display = "none";
  render();
}

function render() {
  applyLang();
  updateFuelLabel();
  renderSelected();
  renderTable();
  renderSummary();
  renderCharts();
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll("[data-i18n-hint]").forEach(el => {
    const h = t(el.dataset.i18nHint);
    el.dataset.hint = h;
    el.setAttribute("aria-label", h);
  });
}

function renderSelected() {
  $("selected").innerHTML = selected.map(id => {
    const c = carById(id);
    return `<span class="chip">${c.make} ${c.model} <button data-remove="${id}">✕</button></span>`;
  }).join("");
}

const typeLabel = (c) => t(c.type);

function consumptionLabel(c) {
  const f = cycleFactor()[c.type];
  return c.type === "ev" ? `${fmt(c.kwh100 * f, 1)} ${t("kwh100")}` : `${fmt(c.l100 * f, 1)} ${t("l100")}`;
}

function editableSpec(key, c) {
  if (key === "price") return { field: "price", value: c.price };
  if (key === "consumption") return c.type === "ev"
    ? { field: "kwh100", value: c.kwh100 }
    : { field: "l100", value: c.l100 };
  const o = effOver(c);
  return { field: key, value: o[key] };
}

const EDIT_KEYS = ["price", "consumption", "maintenance", "insurance", "other"];

function renderTable() {
  const head = $("compare").querySelector("thead tr");
  const body = $("compare").querySelector("tbody");
  if (selected.length === 0) { head.innerHTML = ""; body.innerHTML = ""; return; }
  const annual = num("annual-km", 0);
  const rows = [
    ["model", c => `${c.make} ${c.model}`],
    ["type", c => typeLabel(c)],
    ["consumption", c => consumptionLabel(c)],
    ["price", c => `€${fmt(c.price, 0)}`],
    ["cost100", c => `€${fmt(perKmTotal(c) * 100, 2)}`],
    ["cost1000", c => `€${fmt(perKmTotal(c) * 1000, 2)}`],
    ["costKm", c => `€${fmt(perKmTotal(c), 3)}`],
    ["maintenance", c => `€${fmt(effOver(c).maintenance, 0)}`],
    ["insurance", c => `€${fmt(effOver(c).insurance, 0)}`],
    ["other", c => `€${fmt(effOver(c).other, 0)}`],
    ["annualCost", c => `€${fmt(per100km(c) * annual / 100 + annualOverhead(c), 0)}`],
    ["co2", c => co2For(c)],
  ];
  if (selected.some(id => carById(id).type === "ev")) {
    rows.push(["eqLiters", c => c.type === "ev"
      ? `${fmt(per100km(c) / num("petrol-price", 1), 1)} ${t("l100")}` : "—"]);
  }
  const carHeader = () => selected.map(id => `<th>${carById(id).make}<br>${carById(id).model}</th>`).join("");
  head.innerHTML = `<th></th>` + carHeader();
  const label = (key) => key === "eqLiters"
    ? `${t(key)} <span class="info" data-hint="${t("eqLitersHint")}" aria-label="${t("eqLitersHint")}" tabindex="0">i</span>`
    : t(key);
  body.innerHTML = rows.map(([key, fn]) => {
    const cells = selected.map(id => {
      const c = carById(id);
      if (!EDIT_KEYS.includes(key)) return `<td>${fn(c)}</td>`;
      const { field, value } = editableSpec(key, c);
      return `<td class="cell-val"><span class="cell-display" data-id="${id}" data-field="${field}" data-value="${value}">${fn(c)}</span>` +
             `<button class="cell-edit" data-id="${id}" data-field="${field}" data-value="${value}" title="${t("editHint")}">✎</button></td>`;
    });
    return `<tr><td>${label(key)}</td>` + cells.join("") + `</tr>`;
  }).join("");
}

function startEdit(el, id, field, value) {
  const td = el.closest("td");
  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.step = field === "price" ? "500" : (field === "l100" || field === "kwh100") ? "0.1" : "10";
  input.value = value;
  input.className = "cell-input";
  input.setAttribute("aria-label", t(field));
  td.innerHTML = "";
  td.appendChild(input);
  input.focus();
  input.select();
  let cancelled = false;
  const commit = () => {
    const v = parseFloat(input.value);
    if (Number.isFinite(v) && v >= 0) {
      overrides[id] = Object.assign({}, overrides[id], { [field]: v });
    } else {
      if (overrides[id]) delete overrides[id][field];
      if (overrides[id] && !Object.keys(overrides[id]).length) delete overrides[id];
    }
    render();
  };
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); input.blur(); }
    else if (e.key === "Escape") { cancelled = true; render(); }
  });
  input.addEventListener("blur", () => { if (!cancelled) commit(); });
}

function renderCharts() {
  if (selected.length < 2) {
    Object.values(charts).forEach(c => c.destroy());
    charts = {};
    return;
  }
  renderPayback();
  renderCost();
  renderElec();
  renderCo2();
}

function defaultOverhead(c) {
  return {
    maintenance: Math.max(150, Math.round(c.price * 0.01)),
    insurance: Math.max(150, Math.round(c.price * 0.025)),
    other: { ev: 80, hybrid: 120, diesel: 190, petrol: 140, lpg: 140 }[c.type] || 120,
  };
}

function effOver(c) {
  const d = defaultOverhead(c);
  return {
    maintenance: c.maintenance != null ? c.maintenance : d.maintenance,
    insurance: c.insurance != null ? c.insurance : d.insurance,
    other: c.other != null ? c.other : d.other,
  };
}

function annualOverhead(c) {
  const o = effOver(c);
  return o.maintenance + o.insurance + o.other;
}

const annualKm = () => num("annual-km", 15000);
const fuelYoY = () => num("fuel-yoy", 0) / 100;
function fuelTerm(m) {
  const r = fuelYoY();
  return r > 1e-9 ? annualKm() / r * (Math.exp(r * m / annualKm()) - 1) : m;
}
function perKmTotal(c) {
  return per100km(c) / 100 + annualOverhead(c) / annualKm();
}

function breakEven(aPrice, aFkm, aOkm, bPrice, bFkm, bOkm, maxKm, r = 0, annual = 15000) {
  const fuel = m => r > 1e-9 ? annual / r * (Math.exp(r * m / annual) - 1) : m;
  const diff = m => (bPrice - aPrice) + (bFkm - aFkm) * fuel(m) + (bOkm - aOkm) * m;
  if (Math.abs(diff(0)) < 1e-6) {
    return Math.abs((bFkm + bOkm) - (aFkm + aOkm)) < 1e-9 ? null : 0;
  }
  const step = maxKm / 50;
  let prev = 0, prevD = diff(0);
  for (let m = step; m <= maxKm + 1e-9; m += step) {
    const d = diff(m);
    if (d === 0) return Math.round(m);
    if (Math.sign(d) !== Math.sign(prevD)) {
      let lo = prev, hi = m;
      for (let i = 0; i < 40; i++) {
        const mid = (lo + hi) / 2;
        if (Math.sign(diff(mid)) === Math.sign(prevD)) lo = mid; else hi = mid;
      }
      return Math.round((lo + hi) / 2);
    }
    prev = m; prevD = d;
  }
  return null;
}

function cumulativeCost(car, km) {
  return car.price + per100km(car) / 100 * fuelTerm(km) + annualOverhead(car) / annualKm() * km;
}

function makeChart(id, config) {
  if (charts[id]) charts[id].destroy();
  charts[id] = new Chart($(id).getContext("2d"), config);
}

function renderPayback() {
  const maxKm = 300000;
  const step = 5000;
  const kmPts = [];
  const datasets = [];
  const crossings = [];
  const colors = ["#2563eb", "#16a34a", "#ea580c", "#9333ea", "#dc2626"];
  for (let km = 0; km <= maxKm; km += step) kmPts.push(km);
  const annual = annualKm();

  selected.forEach((id, i) => {
    const c = carById(id);
    datasets.push({
      label: `${c.make} ${c.model}`,
      data: kmPts.map(km => ({ x: km, y: cumulativeCost(c, km) })),
      borderColor: colors[i % colors.length], backgroundColor: colors[i % colors.length],
      pointRadius: 0, borderWidth: 2, tension: 0.2,
    });
  });
  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      const ca = carById(selected[i]), cb = carById(selected[j]);
      const x = breakEven(ca.price, per100km(ca) / 100, annualOverhead(ca) / annual,
                          cb.price, per100km(cb) / 100, annualOverhead(cb) / annual,
                          maxKm, fuelYoY(), annual);
      if (x != null) crossings.push({ xKm: x, a: selected[i], b: selected[j] });
    }
  }

  const crosPts = crossings.map(cr => ({
    x: cr.xKm,
    y: cumulativeCost(carById(cr.b), cr.xKm),
  }));
  if (crosPts.length) {
    datasets.push({
      label: "⨯", data: crosPts, borderColor: "#0f172a", backgroundColor: "#0f172a",
      pointRadius: 5, type: "scatter", showLine: false, crossings,
    });
  }

  makeChart("chart-payback", {
    type: "line",
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: "nearest", intersect: false },
      scales: {
        x: {
          type: "linear",
          title: { display: true, text: t("distanceKm") },
          ticks: { callback: v => (v % 25000 === 0) ? (v / 1000) + "k" : "" },
        },
        y: { title: { display: true, text: t("totalCost") } },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              if (ctx.dataset.crossings) {
                const cr = ctx.dataset.crossings[ctx.dataIndex];
                const ca = carById(cr.a), cb = carById(cr.b);
                return `${ca.make} ${ca.model} ↔ ${cb.make} ${cb.model}: ${fmt(cr.xKm, 0)} km`;
              }
              return `${ctx.dataset.label}: €${fmt(ctx.parsed.y, 0)}`;
            },
          },
        },
      },
    },
  });

  const lines = [];
  crossings.forEach(cr => {
    const ca = carById(cr.a), cb = carById(cr.b);
    const years = Math.round(cr.xKm / annual * 10) / 10;
    lines.push(t("payback")
      .replace("%1", `${ca.make} ${ca.model}`).replace("%2", `${cb.make} ${cb.model}`)
      .replace("%3", fmt(cr.xKm, 0)).replace("%4", fmt(years, 1)).replace("%5", fmt(annual, 0)));
  });
  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      const ca = carById(selected[i]), cb = carById(selected[j]);
      const d0 = cb.price - ca.price;
      const dEnd = cumulativeCost(ca, maxKm) - cumulativeCost(cb, maxKm);
      if (Math.abs(d0) < 1e-6 || Math.abs(dEnd) <= 1) continue;
      if (Math.sign(d0) === Math.sign(dEnd)) {
        const cheaper = dEnd > 0 ? cb : ca;
        const pricier = dEnd > 0 ? ca : cb;
        lines.push(t("paybackNever").replace("%1", `${cheaper.make} ${cheaper.model}`)
          .replace("%2", `${pricier.make} ${pricier.model}`));
      }
    }
  }
  const pricesDiffer = new Set(selected.map(id => carById(id).price)).size > 1;
  $("payback-text").innerHTML = lines.length
    ? lines.map(l => `<div>${l}</div>`).join("")
    : (pricesDiffer ? t("paybackFar").replace("%1", fmt(maxKm, 0)) : t("paybackNone"));
}

function renderCost() {
  makeChart("chart-cost", {
    type: "bar",
    data: {
      labels: selected.map(id => `${carById(id).make} ${carById(id).model}`),
      datasets: [{ label: t("costPer100km"), data: selected.map(id => +per100km(carById(id)).toFixed(2)) }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { y: { beginAtZero: true } },
    },
  });
}

function renderElec() {
  const evs = selected.map(carById).filter(c => c.type === "ev");
  const ices = selected.map(carById).filter(c => c.type !== "ev");
  const isEv = selected.some(c => carById(c).type === "ev");
  $("chart-elec").parentElement.style.display = isEv ? "" : "none";
  if (!isEv) return;

  const elecPrices = [];
  for (let p = 0.10; p <= 0.60 + 1e-9; p += 0.01) elecPrices.push(+p.toFixed(2));
  const colors = ["#2563eb", "#16a34a", "#ea580c", "#9333ea", "#dc2626"];
  const datasets = evs.map((c, i) => ({
    label: `${c.make} ${c.model}`,
    data: elecPrices.map(p => +(c.kwh100 * p).toFixed(2)),
    borderColor: colors[i % colors.length], pointRadius: 0, borderWidth: 2,
  }));
  if (ices.length) {
    const ref = Math.min(...ices.map(c => per100km(c)));
    datasets.push({
      label: `${t("petrolReference")} (min)`, data: elecPrices.map(() => +ref.toFixed(2)),
      borderColor: "#64748b", borderDash: [6, 4], pointRadius: 0, borderWidth: 2,
    });
  }
  makeChart("chart-elec", {
    type: "line",
    data: { labels: elecPrices, datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: t("electricityPrice") } },
        y: { title: { display: true, text: t("costPer100km") }, beginAtZero: true },
      },
    },
  });
}

function renderCo2() {
  const years = Math.max(1, num("ownership-years", 10));
  const annual = annualKm();
  makeChart("chart-co2", {
    type: "bar",
    data: {
      labels: selected.map(id => `${carById(id).make} ${carById(id).model}`),
      datasets: [{
        label: `${t("co2Total")} (${years} ${t("yr")})`,
        data: selected.map(id => co2For(carById(id)) * annual * years / 1e6),
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, title: { display: true, text: "t" } } },
      plugins: {
        tooltip: {
          callbacks: { label: (ctx) => `${t("co2Total")}: ${fmt(ctx.parsed.y, 2)} t` },
        },
      },
    },
  });
}

function renderSummary() {
  const el = $("summary");
  const head = el.querySelector("thead tr");
  const body = el.querySelector("tbody");
  if (selected.length === 0) {
    $("summary-section").style.display = "none";
    head.innerHTML = "";
    body.innerHTML = "";
    return;
  }
  $("summary-section").style.display = "";
  const years = Math.max(1, num("ownership-years", 10));
  const annual = annualKm();
  const r = fuelYoY();
  const grow = r > 1e-9 ? (Math.exp(r * years) - 1) / r : years;
  const fuelTotal = c => per100km(c) / 100 * annual * grow;
  const overTotal = c => annualOverhead(c) * years;
  const carHeader = () => selected.map(id => `<th>${carById(id).make}<br>${carById(id).model}</th>`).join("");
  head.innerHTML = `<th></th>` + carHeader();
  const rows = [
    ["fuel", c => `€${fmt(fuelTotal(c), 0)}`],
    ["maintenance", c => `€${fmt(effOver(c).maintenance * years, 0)}`],
    ["insurance", c => `€${fmt(effOver(c).insurance * years, 0)}`],
    ["other", c => `€${fmt(effOver(c).other * years, 0)}`],
    ["totalRunning", c => `€${fmt(fuelTotal(c) + overTotal(c), 0)}`],
    ["grandTotal", c => `€${fmt(c.price + fuelTotal(c) + overTotal(c), 0)}`],
  ];
  body.innerHTML = rows.map(([k, fn]) =>
    `<tr><td>${t(k)}</td>` + selected.map(id => `<td>${fn(carById(id))}</td>`).join("") + `</tr>`
  ).join("");
}

if (typeof window !== "undefined") init();
if (typeof module !== "undefined" && module.exports) {
  module.exports = { breakEven };
}
