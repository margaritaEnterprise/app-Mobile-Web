import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderDetail from "./actions/renderDetail.js";

const initShare = async () => {
    renderHeader("");
    renderFooter();
    renderDetail();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initShare; 