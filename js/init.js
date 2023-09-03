import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";

const init = async () => {
    renderHeader("home");
    renderFooter();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = init; 