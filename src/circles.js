import "@arcgis/core/assets/esri/themes/dark/main.css";
import "./circles.css";
import Map from "@arcgis/core/Map.js";
import WebMap from "@arcgis/core/WebMap.js";
import Basemap from "@arcgis/core/Basemap.js";
import MapView from "@arcgis/core/views/MapView.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import Point from "@arcgis/core/geometry/Point.js";
import Circle from "@arcgis/core/geometry/Circle.js";
import * as locator from "@arcgis/core/rest/locator.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import esriId from "@arcgis/core/identity/IdentityManager.js";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils.js";

// ---- Settings: config.js, overridable from the URL (?webmap=ID&center=lon,lat&zoom=10&basemap=imagery&unit=feet)
const q = new URLSearchParams(location.search);
const cfg = Object.assign({
  title: "Okeechobee County EOC", center: [-80.83, 27.3], zoom: 10, circlesWebmapId: "", circlesBasemap: "streets",
  geocodeUrl: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
}, window.RADAR_CONFIG || {});
cfg.zoom = cfg.circlesZoom ?? 10; // the radar's zoom (8) is too far out for zones
const webmapId = q.get("webmap") || cfg.circlesWebmapId || "";
// Shared layer mode: zones are saved to a hosted polygon layer (in the EOC web map) instead of this browser.
const layerUrl = (q.get("layer") || cfg.circlesLayerUrl || "").replace(/\/+$/, "");
if (q.get("center")) cfg.center = q.get("center").split(",").map(Number);
if (q.get("zoom")) cfg.zoom = Number(q.get("zoom"));
const COLORS = ["#ff3b30", "#ff9500", "#ffcc00", "#34c759", "#2f9bff", "#c644fc"];
const STORE = "eocCircleZones.v1";

const $ = (id) => document.getElementById(id);
$("title").textContent = cfg.title;

// ---- Map
const arc = "https://services.arcgisonline.com/arcgis/rest/services";
const BASEMAPS = {
  streets: () => new Basemap({ baseLayers: [new TileLayer({ url: `${arc}/World_Street_Map/MapServer` })] }),
  imagery: () => new Basemap({
    baseLayers: [new TileLayer({ url: `${arc}/World_Imagery/MapServer` })],
    referenceLayers: [
      new TileLayer({ url: `${arc}/Reference/World_Transportation/MapServer` }),
      new TileLayer({ url: `${arc}/Reference/World_Boundaries_and_Places/MapServer` }),
    ],
  }),
  dark: () => new Basemap({
    baseLayers: [new TileLayer({ url: `${arc}/Canvas/World_Dark_Gray_Base/MapServer` })],
    referenceLayers: [new TileLayer({ url: `${arc}/Canvas/World_Dark_Gray_Reference/MapServer` })],
  }),
};
let bmName = BASEMAPS[q.get("basemap")] ? q.get("basemap") : (BASEMAPS[cfg.circlesBasemap] ? cfg.circlesBasemap : "streets");

const map = webmapId ? new WebMap({ portalItem: { id: webmapId } }) : new Map({ basemap: BASEMAPS[bmName]() });
const zones = new GraphicsLayer({ title: "Circle zones", listMode: "hide" });
const labels = new GraphicsLayer({ title: "Circle zone labels", listMode: "hide" });
if (webmapId) map.when(() => map.addMany([zones, labels]), () => map.addMany([zones, labels])); // keep zones on top of the web map's layers
else map.addMany([zones, labels]);

const view = new MapView({
  container: "map", map,
  ...(webmapId && !q.get("center") ? {} : { center: cfg.center, zoom: cfg.zoom }),
  constraints: { rotationEnabled: false },
  popup: { dockEnabled: true, dockOptions: { position: "bottom-right", breakpoint: false } },
});
window.circleView = view;
if (webmapId) map.load().catch(() => say("The web map could not be opened. Check the ID and that it is shared with Everyone.", "err"));

// Basemap picker (only when we own the basemap; a web map keeps its own)
if (!webmapId) {
  $("bmRow").hidden = false;
  const paintBm = () => document.querySelectorAll("#bm button").forEach((b) => {
    const on = b.dataset.bm === bmName; b.classList.toggle("on", on); b.setAttribute("aria-checked", String(on));
  });
  document.querySelectorAll("#bm button").forEach((b) => b.onclick = () => { bmName = b.dataset.bm; map.basemap = BASEMAPS[bmName](); paintBm(); });
  paintBm();
}

// ---- Panel controls
function say(text, kind = "") { const el = $("msg"); el.textContent = text; el.className = "help " + kind; }

let unit = q.get("unit") === "feet" ? "feet" : "miles";
const segBtns = document.querySelectorAll(".seg [data-unit]");
function paintUnit() { segBtns.forEach((b) => { const on = b.dataset.unit === unit; b.classList.toggle("on", on); b.setAttribute("aria-checked", String(on)); }); }
segBtns.forEach((b) => b.onclick = () => { unit = b.dataset.unit; paintUnit(); readDistances(); });
paintUnit();

let color = COLORS[0];
COLORS.forEach((c) => {
  const b = document.createElement("button");
  b.type = "button"; b.style.background = c; b.setAttribute("role", "radio"); b.setAttribute("aria-label", "Color " + c);
  b.onclick = () => { color = c; paintColors(); };
  $("colors").append(b);
});
function paintColors() { [...$("colors").children].forEach((b, i) => { const on = COLORS[i] === color; b.classList.toggle("on", on); b.setAttribute("aria-checked", String(on)); }); }
paintColors();

/** Distances typed by the user: "1" or "0.5, 1, 2". Unit words are ignored (the ft/mi buttons decide). Returns a sorted list or null. */
function readDistances() {
  const raw = $("dist").value.replace(/feet|foot|ft|miles?|mi/gi, " ").trim();
  const parts = raw.split(/[,;\s]+/).filter(Boolean);
  const nums = parts.map(Number);
  const ok = parts.length > 0 && parts.length <= 10 && nums.every((n) => Number.isFinite(n) && n > 0);
  const tooBig = ok && nums.some((n) => (unit === "feet" ? n / 5280 : n) > 500);
  $("dist").classList.toggle("bad", !ok || tooBig);
  if (!ok) { say("Enter a distance greater than 0 (for rings, separate with commas).", "err"); return null; }
  if (tooBig) { say("That is more than 500 miles. Check the units.", "err"); return null; }
  if ($("msg").classList.contains("err")) say("");
  return [...new Set(nums)].sort((a, b) => a - b);
}
$("dist").addEventListener("input", readDistances);

let placing = true;
function paintPlacing() {
  $("placeBtn").classList.toggle("on", placing); $("placeBtn").setAttribute("aria-pressed", String(placing));
  $("placeText").textContent = placing ? "Click the map to draw" : "Turn on map clicking";
  $("map").classList.toggle("placing", placing);
}
$("placeBtn").onclick = () => { placing = !placing; paintPlacing(); };
paintPlacing();

$("collapse").onclick = () => {
  const min = $("panel").classList.toggle("min");
  $("collapse").title = min ? "Show panel" : "Hide panel"; $("collapse").setAttribute("aria-label", $("collapse").title);
  $("collapse").setAttribute("aria-expanded", String(!min));
};

// ---- Zones: stored as plain data, drawn as geodesic circles (true ground distance)
let list = [];
if (!layerUrl) {
  try { list = JSON.parse(localStorage.getItem(STORE) || "[]").filter((z) => z && Number.isFinite(z.lon) && Array.isArray(z.dists)); } catch { list = []; }
}
function save() { if (layerUrl) return; try { localStorage.setItem(STORE, JSON.stringify(list)); } catch { /* storage blocked: zones last until the page reloads */ } }

const fmt = (n) => (Math.round(n * 1000) / 1000).toLocaleString("en-US");
const unitShort = (u) => (u === "feet" ? "ft" : "mi");
const distText = (z) => z.dists.map(fmt).join(", ") + " " + unitShort(z.unit);
function rgba(hex, a) { const n = parseInt(hex.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255, a]; }

function circleFor(z, d) {
  return new Circle({
    center: new Point({ longitude: z.lon, latitude: z.lat }),
    radius: d, radiusUnit: z.unit, geodesic: true, numberOfPoints: 180,
  });
}

function draw() {
  zones.removeAll(); labels.removeAll();
  const showLabels = $("showLabels").checked;
  for (const z of list) {
    const outer = z.dists.length - 1;
    z.dists.forEach((d, i) => {
      const geom = circleFor(z, d);
      const fillA = z.dists.length > 1 ? 0.07 : 0.14;
      zones.add(new Graphic({
        geometry: geom,
        symbol: { type: "simple-fill", color: rgba(z.color, fillA), outline: { color: rgba(z.color, 1), width: i === outer ? 2.5 : 1.75, style: i === outer ? "solid" : "dash" } },
        attributes: { zoneId: z.id },
      }));
      if (showLabels) {
        // label sits just inside the top of each ring
        const top = geom.rings[0].reduce((a, p) => (p[1] > a[1] ? p : a));
        const text = (i === outer && z.name ? z.name + " · " : "") + fmt(d) + " " + unitShort(z.unit);
        labels.add(new Graphic({
          geometry: new Point({ longitude: z.lon, latitude: top[1] }),
          symbol: { type: "text", text, color: "#ffffff", haloColor: rgba(z.color, 1), haloSize: 1.5, yoffset: -12,
            font: { size: i === outer ? 12 : 10, weight: "bold", family: "Arial" } },
        }));
      }
    });
    zones.add(new Graphic({
      geometry: new Point({ longitude: z.lon, latitude: z.lat }),
      symbol: { type: "simple-marker", style: "cross", size: 12, outline: { color: rgba(z.color, 1), width: 2.5 } },
      attributes: { zoneId: z.id },
    }));
  }
  renderList();
}

function renderList() {
  const ul = $("list"); ul.textContent = "";
  $("listHead").hidden = $("tools").hidden = list.length === 0;
  $("count").textContent = list.length ? `(${list.length})` : "";
  list.slice().reverse().forEach((z) => {
    const li = document.createElement("li");
    const sw = document.createElement("span"); sw.className = "sw"; sw.style.background = z.color;
    const t = document.createElement("div"); t.className = "t"; t.title = "Zoom to this zone";
    const b = document.createElement("b"); b.textContent = z.name || distText(z);
    const s = document.createElement("small");
    s.textContent = (z.name ? distText(z) + " · " : "") + (z.place || `${z.lat.toFixed(5)}, ${z.lon.toFixed(5)}`);
    t.append(b, s); t.onclick = () => zoomTo(z);
    const x = document.createElement("button"); x.className = "x"; x.type = "button"; x.textContent = "×"; x.setAttribute("aria-label", "Remove " + b.textContent);
    x.onclick = () => removeZones([z]);
    li.append(sw, t, x); ul.append(li);
  });
}

/** Attributes stored for each ring (same names in the saved file and the shared layer). */
function ringAttrs(z, d) {
  return { zone_id: z.id, name: z.name || "", label: (z.name ? z.name + " · " : "") + fmt(d) + " " + unitShort(z.unit),
    radius: d, unit: z.unit, radius_ft: Math.round(z.unit === "feet" ? d : d * 5280),
    center_lat: Math.round(z.lat * 1e6) / 1e6, center_lon: Math.round(z.lon * 1e6) / 1e6, place: z.place || "", color: z.color, created: z.created || "" };
}

function zoomTo(z) { view.goTo(circleFor(z, z.dists[z.dists.length - 1]).extent.clone().expand(1.25)).catch(() => {}); }

function addZone(lon, lat, place) {
  const dists = readDistances();
  if (!dists) { $("dist").focus(); return false; }
  const z = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), lon, lat, dists, unit,
    name: $("name").value.trim(), color, place: place || "", created: new Date().toISOString() };
  list.push(z); mine.push(z.id); save(); draw();
  say(`Drew ${distText(z)}${z.name ? " (" + z.name + ")" : ""}.`, "ok");
  if (shared) shared.add(z);
  // move to the next color so the next zone stands apart
  color = COLORS[(COLORS.indexOf(color) + 1) % COLORS.length]; paintColors();
  return z;
}

view.on("click", (e) => {
  if (!placing || !e.mapPoint) return;
  e.stopPropagation(); // no popups while drawing
  const p = e.mapPoint; // Point gives longitude/latitude for Web Mercator and geographic maps
  if (!Number.isFinite(p.longitude) || !Number.isFinite(p.latitude)) { say("Could not read that location. Try again.", "err"); return; }
  addZone(p.longitude, p.latitude);
});

// ---- Address or coordinates
function parseLatLon(s) {
  const m = s.trim().match(/^(-?\d+(?:\.\d+)?)\s*[,\s]\s*(-?\d+(?:\.\d+)?)$/);
  if (!m) return null;
  let a = Number(m[1]), b = Number(m[2]);
  if (Math.abs(a) > 90 && Math.abs(b) <= 90) [a, b] = [b, a]; // typed long, lat
  if (Math.abs(a) > 90 || Math.abs(b) > 180) return null;
  return { lat: a, lon: b };
}

function placeAt(lon, lat, place) {
  const z = addZone(lon, lat, place);
  if (z) zoomTo(z);
}

$("searchForm").onsubmit = async (e) => {
  e.preventDefault();
  const text = $("addr").value.trim();
  $("matches").hidden = true;
  if (!text) { say("Type an address, place name, or latitude, longitude.", "err"); return; }
  if (!readDistances()) return;
  const ll = parseLatLon(text);
  if (ll) { placeAt(ll.lon, ll.lat, `${ll.lat.toFixed(5)}, ${ll.lon.toFixed(5)}`); return; }
  say("Searching…");
  try {
    const found = await locator.addressToLocations(cfg.geocodeUrl, {
      address: { SingleLine: text }, maxLocations: 5, outFields: ["Match_addr"], countryCode: "USA",
      location: new Point({ longitude: cfg.center[0], latitude: cfg.center[1] }),
    });
    const good = found.filter((c) => c.score >= 80);
    if (!good.length) { say("No match. Try adding the city (Okeechobee, FL), or click the map instead.", "err"); return; }
    const use = (c) => {
      const p = c.location;
      $("matches").hidden = true; placeAt(p.longitude, p.latitude, c.address);
    };
    if (good.length === 1 || good[0].score === 100 && good[1]?.score < 100) { use(good[0]); return; }
    const box = $("matches"); box.textContent = "";
    good.forEach((c) => { const b = document.createElement("button"); b.type = "button"; b.textContent = c.address; b.onclick = () => use(c); box.append(b); });
    box.hidden = false; say("Pick the right match:");
  } catch (err) {
    console.warn("geocode failed", err);
    say("Address search is not available right now. Click the map, or type latitude, longitude.", "err");
  }
};

// ---- Tools
function removeZones(zs) {
  if (!zs.length) return;
  list = list.filter((o) => !zs.includes(o)); save(); draw(); say("");
  if (shared) shared.remove(zs);
}
const mine = []; // zones drawn in this page session, so Undo never removes someone else's zone
$("undo").onclick = () => {
  while (mine.length && !list.some((z) => z.id === mine[mine.length - 1])) mine.pop();
  const id = mine.pop();
  removeZones(list.filter((z) => z.id === id));
};
let clearArm = 0;
const clearText = layerUrl ? "Clear all (everyone)" : "Clear all";
$("clear").onclick = () => {
  // two taps instead of a confirm() box, which embeds often block
  if (Date.now() - clearArm > 3000) { clearArm = Date.now(); $("clear").textContent = "Tap again to clear"; setTimeout(() => { $("clear").textContent = clearText; }, 3000); return; }
  clearArm = 0; $("clear").textContent = clearText; removeZones(list.slice()); say("All zones cleared.");
};
$("showLabels").onchange = draw;

$("download").onclick = () => {
  const features = [];
  for (const z of list) z.dists.forEach((d) => {
    const g = circleFor(z, d);
    features.push({
      type: "Feature",
      geometry: { type: "Polygon", coordinates: g.rings.map((r) => r.map(([x, y]) => [Math.round(x * 1e7) / 1e7, Math.round(y * 1e7) / 1e7])) },
      properties: ringAttrs(z, d),
    });
  });
  const blob = new Blob([JSON.stringify({ type: "FeatureCollection", features }, null, 1)], { type: "application/geo+json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `EOC_circle_zones_${new Date().toISOString().slice(0, 16).replace(/[:T]/g, "")}.geojson`;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  say("Saved a GeoJSON file. If nothing downloaded, use the pop-out button and save from there.", "ok");
};

// ---- Pop-out / full screen (same behaviour as the radar viewer)
const ICONS = {
  popout: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  enter: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  exit: '<svg viewBox="0 0 24 24"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>',
};
const popBtn = $("popout");
let embedded = true;
try { embedded = window.self !== window.top; } catch { /* cross-origin parent */ }
function setPop(icon, label) { popBtn.innerHTML = ICONS[icon]; popBtn.title = label; popBtn.setAttribute("aria-label", label); }
if (embedded) {
  popBtn.href = location.href; setPop("popout", "Open in a new tab"); popBtn.hidden = false;
} else if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
  popBtn.removeAttribute("href"); popBtn.removeAttribute("target"); popBtn.setAttribute("role", "button");
  const isFull = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
  const paintFs = () => setPop(isFull() ? "exit" : "enter", isFull() ? "Exit full screen (Esc)" : "Full screen");
  popBtn.onclick = (e) => {
    e.preventDefault();
    const el = document.documentElement;
    if (isFull()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
  };
  document.addEventListener("fullscreenchange", paintFs);
  document.addEventListener("webkitfullscreenchange", paintFs);
  paintFs(); popBtn.hidden = false;
}

// ---- Shared layer: every zone is written to the hosted layer, so it shows on the EOC map (and for everyone).
let shared = null;
if (layerUrl) {
  if (cfg.circlesAppId) {
    esriId.registerOAuthInfos([new OAuthInfo({ appId: cfg.circlesAppId, popup: true,
      popupCallbackUrl: new URL("oauth-callback.html", location.href).href })]);
  }
  const fl = new FeatureLayer({ url: layerUrl, outFields: ["*"] });
  const fieldMap = {}; // lower-case name -> real field name (publishing can change case)
  const toZones = (feats) => {
    const by = {};
    for (const f of feats) {
      const a = {}; for (const k in f.attributes) a[k.toLowerCase()] = f.attributes[k];
      const id = a.zone_id || "oid" + a[fl.objectIdField.toLowerCase()];
      const z = by[id] ||= { id, lon: Number(a.center_lon), lat: Number(a.center_lat), dists: [], oids: [], unit: a.unit === "feet" ? "feet" : "miles",
        name: a.name || "", color: COLORS.includes(a.color) ? a.color : COLORS[0], place: a.place || "", created: a.created || "" };
      z.dists.push(Number(a.radius)); z.oids.push(f.attributes[fl.objectIdField]);
    }
    return Object.values(by).filter((z) => Number.isFinite(z.lon) && Number.isFinite(z.lat) && z.dists.every(Number.isFinite))
      .map((z) => (z.dists.sort((a, b) => a - b), z)).sort((a, b) => String(a.created).localeCompare(String(b.created)));
  };
  let busy = 0;
  const refresh = async () => {
    if (busy) return;
    try {
      const r = await fl.queryFeatures({ where: "1=1", outFields: ["*"], returnGeometry: false });
      if (busy) return; // an edit started meanwhile; the next refresh will pick it up
      list = toZones(r.features); draw();
      $("sub").textContent = "Circle zones · shared layer";
    } catch (err) {
      console.warn("layer query failed", err);
      say("Could not read the shared circle layer. Check the layer URL, sharing, and that you are signed in.", "err");
    }
  };
  const toLayerGeom = (g) => (fl.spatialReference?.isWebMercator ? webMercatorUtils.geographicToWebMercator(g) : g);
  shared = {
    async add(z) {
      busy++;
      try {
        const addFeatures = z.dists.map((d) => {
          const attrs = {};
          for (const [k, v] of Object.entries(ringAttrs(z, d))) if (fieldMap[k]) attrs[fieldMap[k]] = v;
          return new Graphic({ geometry: toLayerGeom(circleFor(z, d)), attributes: attrs });
        });
        const res = await fl.applyEdits({ addFeatures });
        const bad = res.addFeatureResults.filter((r) => r.error);
        if (bad.length) throw new Error(bad[0].error.message);
        z.oids = res.addFeatureResults.map((r) => r.objectId);
        say(`Saved ${distText(z)} to the EOC map.`, "ok");
      } catch (err) {
        console.warn("save failed", err);
        list = list.filter((o) => o !== z); draw();
        say("Not saved to the EOC map: " + (err.message || "edit refused") + ". Check that the layer allows adding features.", "err");
      } finally { busy--; }
    },
    async remove(zs) {
      const oids = zs.flatMap((z) => z.oids || []);
      if (!oids.length) return;
      busy++;
      try {
        const res = await fl.applyEdits({ deleteFeatures: oids.map((objectId) => ({ objectId })) });
        const bad = res.deleteFeatureResults.filter((r) => r.error);
        if (bad.length) throw new Error(bad[0].error.message);
      } catch (err) {
        console.warn("delete failed", err);
        say("Could not remove from the EOC map: " + (err.message || "edit refused") + ".", "err");
      } finally { busy--; refresh(); }
    },
  };
  fl.load().then(() => {
    for (const f of fl.fields) fieldMap[f.name.toLowerCase()] = f.name;
    const missing = ["zone_id", "radius", "unit", "center_lat", "center_lon"].filter((k) => !fieldMap[k]);
    if (missing.length) say("The shared layer is missing fields: " + missing.join(", ") + ". Publish it from the template file.", "err");
    refresh(); setInterval(refresh, 30000);
  }).catch((err) => {
    console.warn("layer load failed", err);
    say("Could not open the shared circle layer. Check the URL in config.js and that you can sign in.", "err");
  });
}

draw();
