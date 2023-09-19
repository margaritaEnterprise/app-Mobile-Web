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

    let section = $("#all");
    let loaderContainer = $("#loader-container");

    renderLoader(loaderContainer);
    countriesCode = await getAllCountryCodes();

    let countries = await getCountriesByCodes(countriesCode.slice(0,10).map(x => x.cca3));
    renderCountries(section, countries); 

    $("#loader-container").hide();

    renderPaginator(countriesCode.length,1);

    actions();

}

await init();

function actions() {
    pag();
    search();
    changeFilters();
}

function changeFilters(){
    $(".searcher__buttonFilter").click(function (event) {
        event.preventDefault();
        $(this).toggleClass("searcher__buttonFilter--selected");

        var container = $(".searcher__filters");
        var elements = container.find(".searcher__buttonFilter");

        elements.sort(function (a, b) {
            var isSelectedA = $(a).hasClass("searcher__buttonFilter--selected") ? -1 : 1;
            var isSelectedB = $(b).hasClass("searcher__buttonFilter--selected") ? -1 : 1;
            return isSelectedA - isSelectedB;
        });

        $("#filtersNotApplied").text("Hay filtros no aplicados.");

        container.empty().append(elements);

        changeFilters();
    });

    $(".searcher__input__population").keyup(function (event){
        $("#filtersNotApplied").text("Hay filtros no aplicados.");
    });
}

function search(){
    $(".searcher__form").submit(async function (event) {
        event.preventDefault();

        $("#filtersNotApplied").empty();

       $(".paginator").empty();

        const appliedFilters = $(".searcher__applied-filters");
        $(appliedFilters).empty();

        let section = $("#all").empty();

        $("#loader-container").show();

        let valueInput = $("#searcher_input").val();
        let countries  = await getCountry(valueInput);

        let continentFilters = $(".searcher__buttonFilter--selected");

        let selectedValues = continentFilters.map(function() {
            return $(this).data("value");
        }).get(); 

        const minPopulation = $("#minPopulation").val();
        const maxPopulation = $("#maxPopulation").val();
        
        let filteredCountries = countries.filter(country => selectedValues.includes(country.region));

        if(filteredCountries.length == 0) {
            filteredCountries = countries;
        }

        countriesCode = filteredCountries.map(country => {return {"cca3" : country.cca3}});

        if (minPopulation || maxPopulation || selectedValues.length > 0) {
            const filterPill = [];
            if (minPopulation) {
                filterPill.push("<p>Población mínima: " + minPopulation + "</p>");
            }
            if (maxPopulation) {
                filterPill.push("<p>Población máxima: " + maxPopulation + "</p>");
            }
            if (selectedValues.length > 0) {
                selectedValues.forEach(value => {
                    filterPill.push(`<p>${value}</p>`);
                });
            }
            filterPill.forEach( pill => appliedFilters.append(pill));
        }
        
        if(minPopulation) {
            filteredCountries = filteredCountries.filter(country => country.population >= minPopulation);
        }

        if(maxPopulation){
            filteredCountries = filteredCountries.filter(country => country.population <= maxPopulation);
        }

        renderCountries(section, filteredCountries.slice(0, 10));
        renderPaginator(countriesCode.length,1);

        $("#loader-container").hide();

        pag();
    });
}

function pag(){
    $(".paginator__button").click(async function (event) {
        let section = $("#all").empty();
        $("#loader-container").css("display", "block");
        let page = $(this).data("page") - 1
        let countries = await getCountriesByCodes(countriesCode.slice((page)*10,(page*10)+10).map(x => x.cca3));
        renderCountries(section, countries);
        $("#loader-container").hide();
        renderPaginator(countriesCode.length, page+1);
        pag();
    });
}

