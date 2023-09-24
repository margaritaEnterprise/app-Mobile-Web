import renderHeader from "./render/renderHeader.js";
import renderFooter from "./render/renderFooter.js";
import { renderLoader }  from "./render/renderLoader.js";
import renderCountries from "./render/renderCountries.js";
import { isFav, getFavs, setFavs } from "./storage/storageFavs.js";
import { getCountriesByCodes } from "./services/countries.js";
import renderPaginator from "./render/renderPaginator.js";
import Card from './components/card.js';
import noItems from "./components/noItems.js";
import { pagination, quitFavorites } from "./events/eventsFavorites.js";

let countriesCode = [];
let text = "Ya puedes agregar paises favoritos."

const initFavorites = async () => {
    renderHeader("favorites");
    renderFooter();
    renderLoader($("#loader-container"));
    $("#loader-container").show();
    countriesCode = getFavs();
    let section = $("#all");
    console.log(countriesCode);
    if(countriesCode.length == 0){
        $("#loader-container").hide();
        $(".main").append(noItems(text));
    } 
    else {   
        let countries = await getCountriesByCodes(countriesCode.slice(0,10));
        console.log(countries);
        renderPaginator(countriesCode.length,1);
        renderCountries(section, countries); 
    }

    $("#loader-container").hide();
}

await initFavorites();


$(document).ready(function () {
        pagination();
        quitFavorites();
});


