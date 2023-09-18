import { getCountriesByCodes } from "../services/countries.js";
import Detail from "../components/detail.js";
import NotFound from "../components/notFound.js";


function iniciarMap(lat,long,area){
    console.log(lat,long,area);

    let logBase10 = Math.log(area) / Math.log(10)
    let zoom = Math.floor( Math.log(area) / (logBase10));
    var coord = {lat:lat ,lng: long};
    
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: zoom,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
//spinner o enviar por parametro el arraycodes
const renderDetail = async () => {  

    let section = document.getElementById('detailCountry');
    section.innerHTML="";

    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);

    if(response.length == 0) {
        section.innerHTML += NotFound();
    }

    let borders = [];

    if(response[0].borders){
        borders = await getCountriesByCodes(response[0].borders);
        borders = borders.map(country => {
            return {
                name : country.translations.spa.common,
                code : country.cca3,
                flag : country.flags.png
            }
        });

    }

    response.map(country => {
        section.innerHTML += Detail(country, borders);
    });

    iniciarMap(response[0].latlng[0],response[0].latlng[1], response[0].area);

}

export default renderDetail;

