import initMap from "./actions/initMap.js";
import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderUs from "./actions/renderUs.js";
import { UNAJ } from "./utils/const.js";

const initAboutUs = async () => {
    renderHeader("aboutUs");
    renderFooter();
    renderUs();
    //onListItemClick(document.querySelectorAll('.home'))
    initMap(UNAJ.lat,UNAJ.lng, UNAJ.sup);

}

window.onload = initAboutUs; 