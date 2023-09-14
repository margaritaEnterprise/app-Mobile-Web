import renderHeader from "./actions/renderHeader.js";
import renderFooter from "./actions/renderFooter.js";
import { initFavs, getFavs } from "./storage/storageFavs.js";
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
    renderCountries(section, countries); 
}

document.addEventListener("DOMContentLoaded", async () => {
  initFavorites();

});

window.onload = () => {
  $(".addFavorites").click(function() {
    alert(this.id);
  });
}






// //onload el dom ya se creo en el navegador


