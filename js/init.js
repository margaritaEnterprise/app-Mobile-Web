import renderHeader from "./render/renderHeader.js";
import renderSearcher from "./render/renderSearcher.js";
import renderCountries from "./render/renderCountries.js";
import renderFooter from "./render/renderFooter.js";
import { getAllCountryCodes, getCountriesByCodes } from "./services/countries.js";
import { renderLoader } from "./render/renderLoader.js";
import renderPaginator from "./render/renderPaginator.js";
import { pag, search, changeFilters, sendCountriesCodes, toggleMenu, addFavorites, cleanFilters} from "./events/eventsIndex.js";

let countriesCode;

const init = async () => {
    renderHeader("home");
    renderSearcher();
    renderFooter();
    let section = $("#all");
    let loaderContainer = $("#loader-container");
    renderLoader(loaderContainer);
    countriesCode = await getAllCountryCodes();
    let countries = await getCountriesByCodes(countriesCode.slice(0,10).map(x => x.cca3));
    renderCountries(section, countries); 
    $("#loader-container").hide();
    renderPaginator(countriesCode.length,1);
}

await init();

$(document).ready(function () {
    sendCountriesCodes(countriesCode);
    pag();
    changeFilters();
    search();
    toggleMenu();
    addFavorites();
    cleanFilters();
});

