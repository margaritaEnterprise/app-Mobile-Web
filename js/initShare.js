import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderDetailShare from "./actions/renderDetailShare.js";
import renderShare from "./actions/renderShare.js";

const initShare = async () => {
    
    renderHeader("");
    renderFooter();
    renderDetailShare();
//    renderShare();
    //onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initShare; 