import renderHeader from "./actions/renderHeader.js";
import renderSearcher from "./actions/renderSearcher.js";
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";
import { getCountries } from "./services/countries.js";
import { renderLoader } from "./actions/renderLoader.js";


const init = async () => {

    renderHeader("home");
    renderSearcher();
    renderFooter();

    let section = document.getElementById('all');
    let loaderContainer = document.getElementById('loader-container');

    renderLoader(loaderContainer);
    let countries = await getCountries();
    renderCountries(section, countries); //usar constantes

    $("#loader-container").css("display", "none");
}

init();
    
$(document).ready(function() {




    $(".searcher__form").submit(function(event) {
        event.preventDefault();

    });
});



