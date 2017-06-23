// Base Layer
var baseLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Nope',
    maxZoom: 18,
});

// POIS non-admin
var truc = L.marker([38.2969, 140.9356465]).bindPopup('This is truc');
var bidule = L.marker([37.50, 141.938135]).bindPopup('This is bidule');
var machin = L.marker([37.70, 140.95]).bindPopup('This is machin');
var chouette = L.marker([37.49, 140.948145]).bindPopup('This is chouette');
var poisLayer = L.layerGroup([truc, bidule, machin, chouette]);

// POIS jake
var jakeIcon = L.icon({ iconUrl: 'jake.png', iconSize: [38, 38] });
var pilili = L.marker([38.269, 141.9356465], {icon: jakeIcon}).bindPopup('This is truc');
var pololo = L.marker([37.78, 140.35], {icon: jakeIcon}).bindPopup('This is bidule');
var bipbop = L.marker([37.20, 141.95], {icon: jakeIcon}).bindPopup('This is machin');
var poisJakeLayer = L.layerGroup([pilili, pololo, bipbop]);

// Polygons
var regionLayer01 = L.layerGroup([L.geoJSON(polygon01)]);
var regionLayer02 = L.layerGroup([L.geoJSON(polygon02)]);

var map = L.map('mymap', {
    center: [38.497333, 140.943604],
    zoom: 7,
    layers: [baseLayer, poisLayer, poisJakeLayer, regionLayer01, regionLayer02]
});

L.control.layers({"Base": baseLayer }, {
    "Pois": poisLayer,
    "<img src=\"jake.png\" width=\"10px\" height=\"10px\"> Jake": poisJakeLayer,
    "Region 01" : regionLayer01,
    "Region 02" : regionLayer02 
}).addTo(map);
