import renderHeader from "./actions/renderHeader.js";
import renderFooter from "./actions/renderFooter.js";
import { getCountriesByCodes } from "./services/countries.js";
import renderHistory from "./actions/renderHistory.js";

const initFavorites = async () => {
    renderHeader("history");
    renderFooter();
    await renderHistory();
}

window.onload = initFavorites;
