import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderDetail from "./actions/renderDetail.js";

const initDetail = async () => {
    renderHeader("");
    renderFooter();
    renderDetail();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initDetail; 