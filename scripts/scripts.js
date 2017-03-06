L.mapbox.accessToken = 'pk.eyJ1Ijoib21vbmRpc3RldmUiLCJhIjoiY2l6dnF4azlpMDAwaTMybngzbG5zc2dybCJ9.0WxrROcxc8WnAkcoWThc5w';

var map = L.mapbox.map('map', 'mapbox.streets', {
    zoomControl: true
}).setView([-1.2936, 37.02544], 15);

// move the attribution control out of the way
map.attributionControl.setPosition('bottomleft');

// create the initial directions object, from which the layer
// and inputs will pull data.
var directions = L.mapbox.directions();

var directionsLayer = L.mapbox.directions.layer(directions).addTo(map);

var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions).addTo(map);

var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions).addTo(map);

var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions).addTo(map);

var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions).addTo(map);