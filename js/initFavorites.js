import renderHeader from "./actions/renderHeader.js";
import renderFooter from "./actions/renderFooter.js";
import { initFavs, getFavs } from "./actions/storageFavs.js";
import { getCountriesByCodes } from "./services/countries.js";
import renderCountries from "./actions/renderCountries.js";


const initFavorites = async () => {
    renderHeader("favorites");
    renderFooter();

    initFavs(); //let initArrayFavs = ['232', '630', '642', '028'];
    let codes = await getFavs();
    console.log("codes: " + codes)
    let countries = await getCountriesByCodes(codes);
    let section = document.getElementById('all')
    renderCountries(section, countries); //usar constantes
    onListItemClick(document.querySelectorAll('.home'))
}

window.onload = initFavorites; 
//onload el dom ya se creo en el navegador