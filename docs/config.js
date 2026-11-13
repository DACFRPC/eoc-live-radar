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
};
