// Settings for the EOC Live Radar viewer. Edit this file with Notepad; no rebuild needed.
window.RADAR_CONFIG = {
  title: "Okeechobee County EOC",

  // Where the map opens. Longitude, latitude, zoom level.
  center: [-80.83, 27.30],
  zoom: 8,

  // Optional: the item ID of an ArcGIS Online web map to draw under the radar
  // (for example the EOC map with the damage sites). Leave "" for the built-in dark map.
  // The web map must be shared with Everyone, or viewers will be asked to sign in.
  webmapId: "",

  // NWS watches and warnings (Esri Living Atlas live feed). Set to false if your web map already has it.
  showWarnings: true,

  // Radar look and timing.
  radarOpacity: 0.75,      // 0 to 1
  frameMs: 450,            // time each frame stays on screen
  lastFrameHoldMs: 1800,   // pause on the newest frame before the loop restarts
  refreshMinutes: 5,       // how often new radar is pulled
  staleAfterMinutes: 20,   // show a DELAYED badge if the newest scan is older than this

  // ---- Forecast page (forecast.html) and warnings ticker (alerts.html)
  forecastName: "Okeechobee",
  forecastPoint: [27.2439, -80.8298],   // latitude, longitude of the forecast location
  alertArea: "FL",                      // two-letter state for the ticker, or "US" for national
  localCounty: "Okeechobee",            // alerts naming this county are pinned first and tagged LOCAL
  tickerSpeed: 70,                      // ticker scroll speed, pixels per second

  // ---- Circle zone tool (circles.html)
  // Optional: item ID of the EOC web map to show under the zones. Leave "" for a plain basemap.
  // The web map must be shared with Everyone, or viewers will be asked to sign in.
  circlesWebmapId: "",
  circlesBasemap: "streets",            // streets, imagery or dark (only used without a web map)
  circlesZoom: 10,
  // Shared layer: paste the URL of the "EOC Circle Zones" hosted layer (ends in /FeatureServer/0).
  // Circles are then saved to that layer, so they show on the EOC map in the app, for everyone.
  // Leave "" to keep circles only in the viewer's browser.
  circlesLayerUrl: "",
  // Client ID of the OAuth credentials item made for this site (for the ArcGIS Online sign-in window).
  circlesAppId: "",
};
