// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);
// Create the map object with a center and zoom level.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Street": streets,
    "Satellite Streets": satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let torontoHoods="https://raw.githubusercontent.com/aggarwaljuh/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/GEOJSON_Polygon/torontoNeighborhoods.json"

// Grabbing our GeoJSON data.
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

