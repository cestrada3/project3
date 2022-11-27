// Google Map
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.7745, lng: -87.7288 },
      zoom: 14,
    });
    var marker = new google.maps.Marker({
      position: { lat:  41.7745, lng: -87.7288 },
      map: map,
    });
    var addCircle = new google.maps.Circle({
      center: { lat:  41.7745, lng: -87.7288 },
      radius:100,
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.5,
      map: map,
    });
    var infowindow = new google.maps.InfoWindow({
      content: "<p>This is the place that ive had the most fun growing up!</p>"
    });
    infowindow.open(map, marker);
  }
  window.initMap = initMap;
  
  
  // Font Animation
  var string = " Welcome to My Website.";
  var array = string.split("");
  var timer;
  
  function frameLooper () {
      if (array.length > 0) {
          document.getElementById("text").innerHTML += array.shift();
      } else {
          clearTimeout(timer);
              }
      loopTimer = setTimeout('frameLooper()',70);
  
  }
  frameLooper();