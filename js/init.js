import renderHeader from "./actions/renderHeader.js";
import renderSearcher from "./actions/renderSearcher.js";
import renderCountries from "./actions/renderCountries.js";
import renderFooter from "./actions/renderFooter.js";
import { getAllCountryCodes, getCountriesByCodes, getCountry } from "./services/countries.js";
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

    await actions();

}

await init();

async function actions() {
    pag();
    search();
    changeFilters();
}

function changeFilters(){
    $(".searcher__buttonFilter").click(function (event) {
        event.preventDefault();
        $(this).toggleClass("searcher__buttonFilter--selected");
        // Obtener todos los elementos dentro del contenedor padre y ordenarlos
        var container = $(".searcher__filters");
        var elements = container.find(".searcher__buttonFilter");
        
        // Ordenar los elementos
        elements.sort(function (a, b) {
            var isSelectedA = $(a).hasClass("searcher__buttonFilter--selected") ? -1 : 1;
            var isSelectedB = $(b).hasClass("searcher__buttonFilter--selected") ? -1 : 1;
            return isSelectedA - isSelectedB;
        });
        
        // Limpiar el contenedor y volver a agregar los elementos ordenados
        container.empty().append(elements);

        changeFilters();
    });
}

function search(){
    $(".searcher__form").submit(async function (event) {
       
        event.preventDefault();
        let section = document.getElementById('all');
        section.innerHTML = "";
        $("#loader-container").css("display", "block");
        let valueInput = $("#searcher_input").val();
        let countries  = await getCountry(valueInput);

        // Obtener los elementos seleccionados
        let continentFilters = $(".searcher__buttonFilter--selected");
        // Obtener los valores de datos de los elementos seleccionados
        let selectedValues = continentFilters.map(function() {
            return $(this).data("value");
        }).get(); // Con .get(), convertimos el resultado en un array de JavaScript
        
        let filteredCountries = countries.filter(country => selectedValues.includes(country.region));

        if(filteredCountries.length == 0) {
            filteredCountries = countries;
        }

        countriesCode = filteredCountries.map(country => {return {"cca3" : country.cca3}});

        renderCountries(section, filteredCountries.slice(0, 10));
        renderPaginator(countriesCode.length,1);

        $("#loader-container").css("display", "none");

        pag();
    });
}

function pag(){
    $(".paginator__button").click(async function (event) {
        let section = document.getElementById('all');
        section.innerHTML = "";
        $("#loader-container").css("display", "block");
        let page = $(this).data("page") - 1
        let countries = await getCountriesByCodes(countriesCode.slice((page)*10,(page*10)+10).map(x => x.cca3));
        renderCountries(section, countries);
        $("#loader-container").css("display", "none");
        renderPaginator(countriesCode.length, page+1);
        pag();
    });
}

