import renderHeader from "./actions/renderHeader.js";
import renderFooter from "./actions/renderFooter.js";
import { getFavs } from "./storage/storageFavs.js";
import { getCountriesByCodes } from "./services/countries.js";
import renderCountries from "./actions/renderCountries.js";
import { setFavs } from "./storage/storageFavs.js";


const initFavorites = async () => {
    renderHeader("favorites");
    renderFooter();

    let codes = getFavs();
    console.log("codes: " + codes)
    let countries = await getCountriesByCodes(codes);
    let section = document.getElementById('all')
    if(countries.length == 0){
        section.textContent = "aqui se guardaran tus paises favoritos"
    } else {   
        renderCountries(section, countries); 
    }

}

window.onload = initFavorites;
