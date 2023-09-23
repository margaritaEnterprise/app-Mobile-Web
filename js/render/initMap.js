async function initMap(lat, long, area ) {
  const { Map } = await google.maps.importLibrary("maps");

  let map = new Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 5,
  });

    let centerMarker = new google.maps.Marker({
    position: { lat: lat, lng: long },
    map: map,
    title: 'Centro'
  });

  let countryAreaKm2 = area; 
  let scaleFactor = 40000; 
  let initialZoom = Math.max(2, Math.floor(Math.log2(scaleFactor / Math.sqrt(countryAreaKm2))));
  map.setZoom(initialZoom);
}

export default initMap;
