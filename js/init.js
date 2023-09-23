import renderHeader from "./render/renderHeader.js";
import renderSearcher from "./render/renderSearcher.js";
import renderCountries from "./render/renderCountries.js";
import renderFooter from "./render/renderFooter.js";
import { getAllCountryCodes, getCountriesByCodes, getCountry } from "./services/countries.js";
import { renderLoader } from "./render/renderLoader.js";
import renderPaginator from "./render/renderPaginator.js";
import { pag, search, changeFilters, sendCountriesCodes} from "./events/eventsIndex.js";

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
    const toggleButton = $(".toggle-searcher").find("i");
    const searcherBody = $(".search__body");

    toggleButton.click(function() {

        toggleButton.toggleClass("rotated");
        if (searcherBody.hasClass("show")) {
            searcherBody.css("max-height", "0");
            searcherBody.removeClass("show");
        } else {
            searcherBody.addClass("show");
            // Establecer una altura grande para asegurar que todo el contenido se muestre
            searcherBody.css("max-height", "1000px");
        }
    });
});

