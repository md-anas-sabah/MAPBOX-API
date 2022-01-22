const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWRhbmFzc2FiYWgiLCJhIjoiY2t5cHE5bGV2MGM5ajJ2bXZuNXpza29kbiJ9.KwpWDGkPjner_gdyGNjV2Q";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
  });
  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}
