let bingsTiles = new L.BingLayer(BING_KEY, { type: 'Road'});

// POIS non-admin
let truc = L.marker([38.2969, 140.9356465]).bindPopup('This is truc');
let bidule = L.marker([37.50, 141.938135]).bindPopup('This is bidule');
let machin = L.marker([37.70, 140.95]).bindPopup('This is machin');
let chouette = L.marker([37.49, 140.948145]).bindPopup('This is chouette');
let poisLayer = L.layerGroup([truc, bidule, machin, chouette]);

// POIS jake
let jakeIcon = L.icon({ iconUrl: 'jake.png', iconSize: [38, 38] });
let pilili = L.marker([38.269, 141.9356465], {icon: jakeIcon}).bindPopup('This is truc');
let pololo = L.marker([37.78, 140.35], {icon: jakeIcon}).bindPopup('This is bidule');
let bipbop = L.marker([37.20, 141.95], {icon: jakeIcon}).bindPopup('This is machin');
let poisJakeLayer = L.layerGroup([pilili, pololo, bipbop]);

// Polygons
let regionLayer01 = L.layerGroup([L.geoJSON(POLYGON01, {style: {dashArray: '5'}})]);
let regionLayer02 = L.layerGroup([L.geoJSON(POLYGON02, {style: {fillColor: '#FC4E2A', color: '#FC4E2A', dashArray: '5'}})]);

let map = L.map('mymap', {
    center: [38.497333, 140.943604],
    zoom: 7,
    layers: [bingsTiles, poisLayer, poisJakeLayer, regionLayer01, regionLayer02]
});

L.control.layers({"Base": bingsTiles }, {
    "<img src=\"https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png\" width=\"7px\" height=\"10px\"> Pois": poisLayer,
    "<img src=\"jake.png\" width=\"10px\" height=\"10px\"> Jake": poisJakeLayer,
    "<i style=\"background: #FC4E2A\"></i> Red region" : regionLayer01,
    "<i style=\"background: #2A73FF\"></i> Blue region" : regionLayer02
}, {collapsed: false, hideSingleBase: true}).addTo(map);

