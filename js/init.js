import renderHeader from "./actions/renderHeader.js";
import renderSearcher from "./actions/renderSearcher.js";
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";
import onListItemClick from "./actions/onListItemClick.js"

const init = async () => {
    renderHeader("home");
    renderSearcher();
    renderCountries();
    renderFooter();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = init; 
//onload el dom ya se creo en el navegador