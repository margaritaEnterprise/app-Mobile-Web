import renderHeader from "./actions/renderHeader.js";
import renderSearcher from "./actions/renderSearcher.js";
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";
import { getAllCountryCodes, getCountriesByCodes } from "./services/countries.js";
import { renderLoader } from "./actions/renderLoader.js";
import renderPaginator from "./actions/renderPaginator.js";

let countriesCode;

const init = async () => {

    renderHeader("home");
    renderSearcher();
    renderFooter();

    let section = document.getElementById('all');
    let loaderContainer = document.getElementById('loader-container');

    renderLoader(loaderContainer);
    countriesCode = await getAllCountryCodes();

    let countries = await getCountriesByCodes(countriesCode.slice(0,10).map(x => x.cca3));
    renderCountries(section, countries); 

    $("#loader-container").css("display", "none");

    renderPaginator(countriesCode.length,1);

    actions();

}


await init();

function actions() {
    $(document).ready(function () {
        $(".paginator__button").click(async function (event) {
            $("#loader-container").css("display", "block");
            let page = $(this).data("page") - 1
            let countries = await getCountriesByCodes(countriesCode.slice((page)*10,(page*10)+10).map(x => x.cca3));
            let section = document.getElementById('all');
            console.log(page*10,(page*10)+10);
            renderCountries(section, countries);
            $("#loader-container").css("display", "none");
            renderPaginator(countriesCode.length, page+1);
            actions();
        });
    
        $(".searcher__form").submit(function (event) {
            event.preventDefault();
        });
    });
}
