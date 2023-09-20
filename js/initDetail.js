import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";
import renderDetail from "./render/renderDetail.js";
import { renderLoader } from "./render/renderLoader.js";
import { getCountriesByCodes } from "./services/countries.js";
import { setHistory }  from './storage/storageHistory.js';

const initDetail = async () => {
    renderHeader("");
    renderFooter();

    renderLoader($("#loader-container"));
    $("#loader-container").show();

    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);
    
    setHistory(response[0].cca3);

    await renderDetail(response);

    $("#loader-container").hide();
}

await initDetail();