import renderHeader from "./render/renderHeader.js";
import renderFooter from "./render/renderFooter.js";
import { renderLoader } from "./render/renderLoader.js";
import renderHistory from "./render/renderHistory.js";

const initHistory = async () => {
    renderHeader("history");
    renderFooter();
    renderLoader($("#loader-container"));
    $("#loader-container").show();
    await renderHistory();
    $("#loader-container").hide();
}

window.onload = initHistory;
