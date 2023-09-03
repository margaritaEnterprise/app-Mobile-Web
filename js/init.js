import onListItemClick from "./actions/onListItemClick.js"
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";

const init = async () => {
    renderFooter();
    renderCountries();    
    // alert("init");
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = init; 