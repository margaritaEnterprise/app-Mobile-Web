import detailShare from "../components/detailShare.js";
import { getCountriesByCodes } from "../services/countries.js";
import NotFound from "../components/notFound.js";

//spinner o enviar por parametro el arraycodes
const renderDetailShare = async () => {  
    let section = document.getElementById('detailCountry');

    section.innerHTML="";
    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);

    if(response.length == 0) {
        section.innerHTML += NotFound();
    }

    response.map(country => {
        section.innerHTML = detailShare(country);
    });
}

export default renderDetailShare;