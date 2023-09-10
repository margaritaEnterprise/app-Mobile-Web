import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderDetail from "./actions/renderDetail.js";
import { getCountriesByCodes } from "./services/countries.js";

const initDetail = async () => {
    renderHeader("");
    renderFooter();
    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');
    let response = await getCountriesByCodes([code]);
    renderDetail(response);
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initDetail; 