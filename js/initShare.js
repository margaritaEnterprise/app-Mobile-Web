import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";

const initShare = async () => {
    renderHeader("");
    renderFooter();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initShare; 