var map;
var service;

// Initialize and add the map
function initMap() {
  // The location of Newcastle
  let lat1;
  let lon1;
  function onPositionUpdate(position) {
    lat1 = position.coords.latitude;
    lon1 = position.coords.longitude;
  }

  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(onPositionUpdate);
  else alert("navigator.geolocation is not available");

  const newcastle = { lat: lat1, lng: lon1 };
  // The map, centered at Newcastle
  map = new google.maps.Map(document.getElementById("map"), {
    center: newcastle,
    zoom: 15,
  });

  var request = {
    location: newcastle,
    type: ["restaurant"],
    radius: "500",
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      console.log(results[i]);
    }
  }
}

function createMarker(place) {
  new google.maps.Marker({
    position: place.geometry.location,
    map: map,
  });
}

window.initMap = initMap;
