import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";

const initSend = async () => {
    renderHeader("games");
    renderFooter();
}

window.onload = initSend; 