import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";
import renderDetail from "./render/renderDetail.js";
import { renderLoader } from "./render/renderLoader.js";
import { getCountriesByCodes } from "./services/countries.js";
import { setHistory }  from './storage/storageHistory.js';
import { favs } from "./events/eventsDetails.js";

const initDetail = async () => {
    renderHeader("");
    renderFooter();

    renderLoader($("#loader-container"));
    $("#loader-container").show();

    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);
    
    if(response.length == 0){
        window.location.href = "../pages/404.html"
    }

    setHistory(response[0].cca3);

    await renderDetail(response);
    $("#detailCountry").show()
    $("#loader-container").hide();
}

await initDetail();

$(document).ready(function () {
   favs();
});
