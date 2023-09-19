import detailShare from "../components/detailShare.js";
import { getCountriesByCodes } from "../services/countries.js";
import NotFound from "../components/notFound.js";
import renderShare from "./renderShare.js";


const renderDetailShare = async () => {  
    let section = $("#detailCountry").empty();

    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);

    if(response.length == 0) {
        $(section).html(NotFound());
    }

    response.map(country => {
        $(section).html(detailShare(country));
        renderShare();
    });

    

}

export default renderDetailShare;