import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";

const initAboutUs = async () => {
    renderHeader("aboutUs");
    renderFooter();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initAboutUs; 