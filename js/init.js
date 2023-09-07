import renderHeader from "./actions/renderHeader.js";
import renderSearcher from "./actions/renderSearcher.js";
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";
import onListItemClick from "./actions/onListItemClick.js"
import { getCountries } from "./services/countries.js";

const init = async () => {
    renderHeader("home");
    renderSearcher();
    renderFooter();
    
    let countries = await getCountries();
    let section = document.getElementById('all');
    renderCountries(section, countries); //usar constantes
}

window.onload = init; 
//onload el dom ya se creo en el navegador