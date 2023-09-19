const initMap = (lat,long,area) => {
  console.log(lat,long,area);

  let logBase10 = Math.log(area) / Math.log(10)
  let zoom = Math.floor( Math.log(area) / (logBase10));
  var coord = {lat:lat ,lng: long};
  
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: zoom, //unaj
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

export default initMap;