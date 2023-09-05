import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import openCountry from "./actions/openCountry.js";

const initDetail = async () => {
    renderHeader("");
    renderFooter();
    openCountry();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initDetail; 