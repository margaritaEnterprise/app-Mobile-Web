import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";

const initSend = async () => {
    renderHeader("games");
    renderFooter();
    //onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initSend; 