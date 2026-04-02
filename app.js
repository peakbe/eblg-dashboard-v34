import "./js/map.js";
import "./js/runways.js";
import "./js/metar.js";
import "./js/taf.js";
import "./js/fids.js";
import "./js/sonometers.js";
import "./js/ui.js";

window.onload = () => {
    window.map = initMap();
    initUI();
    initHeatmapToggle(window.map);
    initHeatmapHistory(window.map);
    initClusterToggle(window.map);
    initDebugPanel(window.map);
    loadMetar();
    loadTaf();
    loadFids();
};
