import onListItemClick from "./actions/onListItemClick.js"
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderSearcher from "./actions/renderSearcher.js";

const init = async () => {
    renderCountries();
    renderHeader("home");
    renderSearcher();
    renderFooter();
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = init; 