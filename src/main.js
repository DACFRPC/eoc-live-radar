import "@arcgis/core/assets/esri/themes/dark/main.css";
import "./style.css";
import Map from "@arcgis/core/Map.js";
import WebMap from "@arcgis/core/WebMap.js";
import Basemap from "@arcgis/core/Basemap.js";
import MapView from "@arcgis/core/views/MapView.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer.js";
import Layer from "@arcgis/core/layers/Layer.js";

// ---- Settings: config.js, overridable from the URL (?webmap=ID&center=lon,lat&zoom=8&warnings=0)
const q = new URLSearchParams(location.search);
const cfg = Object.assign({
  title: "EOC", center: [-80.83, 27.3], zoom: 8, webmapId: "", showWarnings: true,
  radarOpacity: 0.75, frameMs: 450, lastFrameHoldMs: 1800, refreshMinutes: 5, staleAfterMinutes: 20,
}, window.RADAR_CONFIG || {});
if (q.get("webmap")) cfg.webmapId = q.get("webmap");
if (q.get("center")) cfg.center = q.get("center").split(",").map(Number);
if (q.get("zoom")) cfg.zoom = Number(q.get("zoom"));
if (q.get("warnings") === "0") cfg.showWarnings = false;

// ---- Radar feed: NEXRAD base reflectivity national composite, Iowa Environmental Mesonet tile cache.
// One layer per 5 minute step, from 55 minutes ago up to the newest scan.
const IEM = "https://mesonet.agron.iastate.edu";
const OFFSETS = [55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0];
const WARNINGS_ITEM = "a6134ae01aad44c499d12feec782b386"; // Living Atlas: USA Weather Watches and Warnings
const STEP = 5 * 60 * 1000;

const $ = (id) => document.getElementById(id);
$("title").textContent = cfg.title;
$("opacity").value = Math.round(cfg.radarOpacity * 100);

const frames = OFFSETS.map((m) => new WebTileLayer({
  urlTemplate: `${IEM}/cache/tile.py/1.0.0/nexrad-n0q-900913${m ? `-m${String(m).padStart(2, "0")}m` : ""}/{level}/{col}/{row}.png`,
  copyright: "NEXRAD composite: Iowa Environmental Mesonet / NOAA NWS",
  title: m ? `Radar ${m} min ago` : "Radar now",
  listMode: "hide",
  opacity: 0,
}));

let map;
if (cfg.webmapId) {
  map = new WebMap({ portalItem: { id: cfg.webmapId } });
} else {
  const arc = "https://services.arcgisonline.com/arcgis/rest/services/Canvas";
  map = new Map({
    basemap: new Basemap({
      baseLayers: [new TileLayer({ url: `${arc}/World_Dark_Gray_Base/MapServer` })],
      referenceLayers: [new TileLayer({ url: `${arc}/World_Dark_Gray_Reference/MapServer` })],
    }),
  });
}
map.addMany(frames, 0); // radar sits just above the basemap, under any operational layers

const view = new MapView({
  container: "map", map, center: cfg.center, zoom: cfg.zoom,
  constraints: { minZoom: 4, maxZoom: 12, rotationEnabled: false },
  popup: { dockEnabled: true, dockOptions: { position: "top-right", breakpoint: false } },
});
window.radarView = view;

function note(text) { const el = $("msg"); el.textContent = text; el.hidden = !text; }
if (cfg.webmapId) map.load().catch(() => note("The web map could not be opened. Check the ID and that it is shared with Everyone."));

// ---- Warnings overlay
let warnings = null;
const warnBtn = $("warn");
function setWarn(on) {
  warnBtn.classList.toggle("on", on); warnBtn.setAttribute("aria-pressed", String(on));
  if (warnings) warnings.visible = on;
}
if (cfg.showWarnings) {
  Layer.fromPortalItem({ portalItem: { id: WARNINGS_ITEM } }).then((lyr) => {
    warnings = lyr; lyr.opacity = 0.55; lyr.visible = warnBtn.classList.contains("on");
    if ("refreshInterval" in lyr) lyr.refreshInterval = cfg.refreshMinutes;
    lyr.layers?.forEach((l) => { if ("refreshInterval" in l) l.refreshInterval = cfg.refreshMinutes; });
    map.add(lyr);
  }).catch(() => { warnBtn.disabled = true; warnBtn.classList.remove("on"); warnBtn.textContent = "Warnings unavailable"; });
} else { warnBtn.hidden = true; }
warnBtn.onclick = () => setWarn(!warnBtn.classList.contains("on"));

// ---- Time of the newest scan. Ask IEM; if that fails, assume the latest 5 minute mark.
let latest = Math.floor(Date.now() / STEP) * STEP;
let latestKnown = false;
async function fetchLatest() {
  try {
    const iso = (ms) => new Date(ms).toISOString().slice(0, 16) + "Z";
    const r = await fetch(`${IEM}/json/radar.py?operation=list&radar=USCOMP&product=N0Q&start=${iso(Date.now() - 3 * 3600e3)}&end=${iso(Date.now() + 600e3)}`, { cache: "no-store" });
    const scans = (await r.json()).scans;
    const t = Date.parse(scans[scans.length - 1].ts);
    if (!Number.isFinite(t)) throw new Error("no time");
    latest = t; latestKnown = true;
  } catch {
    latest = Math.floor(Date.now() / STEP) * STEP; latestKnown = false;
  }
}

// ---- Animation
let idx = frames.length - 1, playing = true, timer = null, opacity = cfg.radarOpacity, failed = 0;
const tf = new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit", timeZoneName: "short" });

function show(i) {
  frames[idx].opacity = 0;
  idx = i;
  frames[idx].opacity = opacity;
  $("scrub").value = idx;
  const t = latest - OFFSETS[idx] * 60000;
  $("time").textContent = (latestKnown ? "" : "~") + tf.format(t);
  const age = Math.max(0, Math.round((Date.now() - t) / 60000));
  $("ago").textContent = idx === frames.length - 1 ? `Newest scan, ${age} min ago` : `${OFFSETS[idx]} min before newest`;
  paintStatus();
}
function paintStatus() {
  const s = $("status"), ageMin = (Date.now() - latest) / 60000;
  let cls = "loop", text = "LOOP";
  if (failed > 3) { cls = "error"; text = "RADAR FEED DOWN"; }
  else if (latestKnown && ageMin > cfg.staleAfterMinutes) { cls = "stale"; text = "DELAYED"; }
  else if (idx === frames.length - 1) { cls = "live"; text = "LIVE"; }
  s.className = cls; $("statusText").textContent = text;
}
function tick() {
  const next = (idx + 1) % frames.length;
  show(next);
  timer = setTimeout(tick, next === frames.length - 1 ? cfg.lastFrameHoldMs : cfg.frameMs);
}
function setPlaying(on) {
  playing = on; clearTimeout(timer);
  $("play").innerHTML = on ? "&#10074;&#10074;" : "&#9654;";
  $("play").setAttribute("aria-label", on ? "Pause" : "Play");
  if (on) timer = setTimeout(tick, cfg.frameMs);
}
$("play").onclick = () => setPlaying(!playing);
$("scrub").oninput = (e) => { setPlaying(false); show(Number(e.target.value)); };
$("opacity").oninput = (e) => { opacity = Number(e.target.value) / 100; frames[idx].opacity = opacity; };
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") { e.preventDefault(); setPlaying(!playing); }
  if (e.code === "ArrowLeft") { setPlaying(false); show((idx + frames.length - 1) % frames.length); }
  if (e.code === "ArrowRight") { setPlaying(false); show((idx + 1) % frames.length); }
});

// Probe one radar tile over Florida so a dead feed is obvious instead of a silently empty map.
function probe() {
  return new Promise((res) => {
    const im = new Image();
    im.onload = () => res(true); im.onerror = () => res(false);
    im.src = `${IEM}/cache/tile.py/1.0.0/nexrad-n0q-900913/5/8/13.png?probe=${Date.now()}`;
  }).then((ok) => { failed = ok ? 0 : 99; paintStatus(); });
}

async function refresh() {
  await fetchLatest();
  probe();
  frames.forEach((f) => f.refresh());
  show(idx);
}
fetchLatest().then(() => { show(frames.length - 1); setPlaying(true); probe(); });
setInterval(refresh, cfg.refreshMinutes * 60000);
// A tablet that wakes from sleep should not show old radar.
document.addEventListener("visibilitychange", () => { if (!document.hidden) refresh(); });
