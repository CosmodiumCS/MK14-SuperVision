// map
var map = L.map(
    "map",
    {
        center: [0, 0],
        crs: L.CRS.EPSG3857,
        zoom: 1,
        zoomControl: true,
        preferCanvas: false
    }
);
L.control.scale().addTo(map);

//  tile layers
var cosmodiumcsTileLayer = L.tileLayer( // cosmodiumcs custom tile layer
"https://api.mapbox.com/styles/v1/cosmodiumcs/cl5cuv2ar000315o5qr197too/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29zbW9kaXVtY3MiLCJhIjoiY2w1Y3VucHRjMDZtdjNkb3libjNlMjEyZSJ9.z2TV_0S6PuuIHS847jCq1A",
{attribution: "© CosmodiumCS"}
<!-- {"attribution": "CosmodiumCS Theme", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false} -->
).addTo(map);
var satelliteTileLayer = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'); // sattelite tile layer

// minimap
const miniMap = new L.Control.MiniMap(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
})).addTo(map);

// geocoder
var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
}).on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
}).addTo(map);

// icons
var cameraIcon = L.icon({ // cameras
    iconUrl: 'assets/camera.png',
    iconSize:     [40, 40], 
});             
var busIcon = L.icon({ // buses
    iconUrl: 'assets/bus.png',
    iconSize:     [40, 40],
});
var boatIcon = L.icon({ // boats
    iconUrl: 'assets/boat.png',
    iconSize:     [40, 40],
});

// cluster icons
function cameraClusterIcon(cluster) { // cameras
    return L.divIcon({
    html: '<div style="background-color: #009999; color: white; border-radius: 50%; width: 40px; height: 40px; text-align: center; line-height: 40px;">' + cluster.getChildCount() + '</div>',
    className: 'custom-cluster-icon'
    });
}

// parse json
function parseJSON(jsonFile) {
    fetch(jsonFile) 
    .then(response => response.json())
    .then(data => {
        data.forEach(point => {
            const camera = L.marker([point.lat, point.lon], {icon: cameraIcon})
            <!-- const title = (point.description).replace("&","and"); -->
            camera.bindPopup("<a href="+point.url+" target=_blank>"+point.description+"</a>");

            cameraClusterGroup.addLayer(camera);

        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
}

// parse geojson
function parseGEO(geojsonFile) {
    fetch(geojsonFile) 
        .then(response => response.json())
        .then(data => {

    const points = L.geoJSON(data, { 
        onEachFeature: function(feature, layer) {
            let url = feature.properties.url;
            if (url.endsWith('m3u8')) {
                url = "https://www.hlsplayer.org/play?url=" + url.replace(":","%3A").replace("/","%2F");
            }
                layer.bindPopup(`<a href="${url}" target="_blank">${feature.properties.description}</a>`);
            },
        pointToLayer: (feature, latlng) => {
            const mpoints = L.marker(latlng, {icon: cameraIcon});
            mpoints.bindPopup(data.description)
            return mpoints
        }
    })
            cameraClusterGroup.addLayer(points);
        })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
}

// cluster groups
var cameraClusterGroup = L.markerClusterGroup({ // cameras
    iconCreateFunction: cameraClusterIcon
});

// layer control
var cameraLayerGroup = L.layerGroup([cameraClusterGroup]); // cameras
var transitLayerGroup = L.layerGroup();
var baseLayers = {
    "CosmodiumCS Tiles": cosmodiumcsTileLayer,
    "Sattelite Tiles": satelliteTileLayer
};
var overlays = {
    "Cameras": cameraLayerGroup,
    "Transit": transitLayerGroup
};

L.control.layers(baseLayers, overlays).addTo(map); // add layer control

// camera array
var cameraArray = ['cameras/maryland.json', 'cameras/virginia.geojson', 'cameras/london.geojson', 'cameras/nothern-ireland.geojson', 'cameras/alberta.json', 'cameras/toronto.json'];

// parse cameras
cameraArray.forEach((file) => {
    const extension = file.split(".").pop(); // get the file extension
    if (extension === "json") {
        parseJSON(file); // parse json data
    } else if (extension === "geojson") {
        parseGEO(file); // parse geojson data
    } else {
        console.log(`Unsupported file type: ${extension}`);
    }
});

// add cameras to map
map.addLayer(cameraClusterGroup);

