function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.7745, lng: -87.7288 },
    zoom: 10,
  });
  var marker = new google.maps.Marker({
    position: { lat: 41.7745, lng:-87.7288 },
    map: map,
  });
  var addCircle = new google.maps.Circle({
    center: { lat: 41.7745, lng: -87.7288 },
	radius:1000,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
	map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<p>My favorite place growing up!</p>"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;