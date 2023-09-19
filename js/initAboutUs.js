import initMap from "./render/initMap.js";
import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";
import renderUs from "./render/renderUs.js";
import { UNAJ } from "./utils/const.js";

const initAboutUs = async () => {
    renderHeader("aboutUs");
    renderFooter();
    renderUs();
    initMap(UNAJ.lat,UNAJ.lng, UNAJ.sup);

}

window.onload = initAboutUs; 