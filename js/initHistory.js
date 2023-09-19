import renderHeader from "./actions/renderHeader.js";
import renderFooter from "./actions/renderFooter.js";
import { renderLoader } from "./actions/renderLoader.js";
import renderHistory from "./actions/renderHistory.js";

const initFavorites = async () => {
    renderHeader("history");
    renderFooter();
    renderLoader($("#loader-container"));
    $("#loader-container").show();
    await renderHistory();
    $("#loader-container").hide();
}

window.onload = initFavorites;
