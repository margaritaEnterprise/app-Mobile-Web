import onListItemClick from "./actions/onListItemClick.js"
import renderFooter from "./actions/renderFooter.js";

const initAboutUs = async () => {
    renderFooter();
    
    // alert("init");
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initAboutUs; 