EOC Live Radar viewer
=====================
An animated NEXRAD radar loop (last 55 minutes, 5 minute steps) with play/pause, a time
scrubber, NWS watches and warnings, and LIVE / DELAYED / FEED DOWN status.

Hosting: copy everything in the "docs" folder to any HTTPS web host, keeping the folder
structure. It will not run by double-clicking index.html; it has to be served from a web host.

Settings: edit docs/config.js in Notepad (title, map centre, zoom, optional web map ID,
warnings on/off, speed). No rebuild needed.

URL options: index.html?webmap=ITEMID&center=-80.83,27.30&zoom=9&warnings=0

In Experience Builder: put an Embed widget in a Window, choose Embed by URL, paste the page URL.

Data: radar tiles from the Iowa Environmental Mesonet (Iowa State University) NEXRAD
composite, built from NOAA NWS radars; warnings from the Esri Living Atlas live feed
"USA Weather Watches and Warnings". Both are provided without warranty. Use official NWS
products for life-safety decisions.

Rebuild from source (only needed to change the code): in the repository root run
  npm install
  npm run build

More pages (plain HTML, same config.js)
---------------------------------------
forecast.html   NWS point forecast: now, next 12 hours, 7 day outlook.
                Options: ?point=27.2439,-80.8298&name=Okeechobee
alerts.html     Scrolling ticker of active NWS alerts. Made for a thin strip (about 56 px tall).
                Options: ?area=FL (state) or ?area=US (national, Severe and Extreme only)
                         ?min=Minor|Moderate|Severe|Extreme   ?speed=70   ?view=list (full list with details)
Both read api.weather.gov directly from the viewer's browser and refresh on their own.
