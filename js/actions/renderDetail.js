import { getCountriesByCodes } from "../services/countries.js";
import Detail from "../components/detail.js";

//spinner o enviar por parametro el arraycodes
const renderDetail = async () => {  
    let section = document.getElementById('detailCountry');
    section.innerHTML="";
    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);


    if(response.length == 0) {
        response = await getCountriesByCodes(["032"]);
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
}

export default renderDetail;