const initMap = (lat,long,area) => {

    var mymap = L.map('map').setView([lat, long], 10);

  // Agrega una capa de mapa base
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 18,
}).addTo(mymap);

  var marker = L.marker([lat, long]).addTo(mymap);

  L.control.scale().addTo(mymap);
}

export default initMap;