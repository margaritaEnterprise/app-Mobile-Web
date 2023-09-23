import initMap from "./render/initMap.js";
import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";
import { UNAJ } from "./utils/const.js";
import Us from "./components/us.js";

const initAboutUs = async () => {
    renderHeader("aboutUs");
    renderFooter();
    $("#main").html(Us());
    initMap(UNAJ.lat,UNAJ.lng, UNAJ.sup);

}

window.onload = initAboutUs; 