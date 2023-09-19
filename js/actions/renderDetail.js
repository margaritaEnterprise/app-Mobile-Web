import { getCountriesByCodes } from "../services/countries.js";
import Detail from "../components/detail.js";
import NotFound from "../components/notFound.js";
import initMap from "../actions/initMap.js";

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

    initMap(response[0].latlng[0],response[0].latlng[1], response[0].area);
}

export default renderDetail;