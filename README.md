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
Pop-out button (top right, next to the status badge): inside an embed it opens the viewer in
its own browser tab, keeping any URL options. In its own tab it switches to full screen
(press F or the button; Esc to leave). If the button does nothing inside the embed, the
embed is blocking new tabs: allow pop-ups for the app's site in the browser.

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

conditions.html Conditions panel: current weather (Synoptic station KOBE + NWS hourly text), active
                NWS alerts for the county, and the top 3 rain gauges in Okeechobee County by 24 hour
                total (Synoptic precip service, county selector).
                Needs a Synoptic PUBLIC token, passed after a # so it never sits in this repository:
                  conditions.html#token=YOUR_PUBLIC_TOKEN
                In the Synoptic console (Manage Tokens) make a dedicated public token for this page and
                set its allowed HTTP Origin to https://dacfrpc.github.io . Requests from any other web
                page are then refused (403). Never put the private API key anywhere in this site.
                Also shows: NWS rain forecast for the next 24/48/72 h (gridded QPF), a gust warning
                (orange at 30 mph, red at 40 mph, observed or forecast in the next 24 h), Lake Okeechobee
                stage with 24 h / 7 day change and a 7 day trend line (USACE CWMS Data API, office SAJ),
                and river/canal gauges in the county from NOAA NWPS, colored by flood category.
                config.js can set gustWatchMph, gustWarnMph, riverBbox, lakeTsId (exact CWMS series).
                Options (after # or ?): &stids=KOBE,S65E (use these stations instead of the county)
                         &count=5   &county=Okeechobee   &currentStid=KOBE   &alerts=0

circles.html    Circle zone tool (map page, built from src/circles.js). Type a distance in feet or miles
                (one number, or several like 0.5, 1, 2 for rings), optional label and color, then click
                the map or type an address or "lat, long" and press Draw. Circles are geodesic (true
                ground distance). Zones list with zoom-to and remove, Undo last, Clear all (tap twice),
                labels on/off, Streets/Imagery/Dark basemap, and Save file (GeoJSON of the zones, which
                can be added to ArcGIS Online as a hosted layer). Zones are kept in that browser only.
                config.js: circlesWebmapId (EOC web map under the zones, must be shared with Everyone),
                circlesBasemap, circlesZoom. Options: ?webmap=ITEMID&unit=feet&basemap=imagery&center=lon,lat&zoom=12
                Note: zones drawn here appear only in this page, not on the Experience Builder map.
