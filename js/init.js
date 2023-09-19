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

        const appliedFilters = $(".searcher__applied-filters");
        $(appliedFilters).empty();

        let section = document.getElementById('all');
        section.innerHTML = "";
        $("#loader-container").css("display", "block");
        let valueInput = $("#searcher_input").val();
        let countries  = await getCountry(valueInput);

        let continentFilters = $(".searcher__buttonFilter--selected");

        let selectedValues = continentFilters.map(function() {
            return $(this).data("value");
        }).get(); 

        const minPopulation = $("#minPopulation").val();
        
        const maxPopulation = $("#maxPopulation").val();

        console.log(`Population ${minPopulation}, ${maxPopulation}`);
        
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
    
            if (selectedValues) {
                selectedValues.forEach(value => {
                    filterPill.push(`<p>${value}</p>`);
                });
            }
        
            filterPill.forEach( pill => appliedFilters.append(pill));
        } else {
            $(".filters-not-applied").html("<p>No se han aplicado filtros</p>");
        }
        
        if(minPopulation) {
            filteredCountries = filteredCountries.filter(country => country.population >= minPopulation);
        }

        if(maxPopulation){
            filteredCountries = filteredCountries.filter(country => country.population <= maxPopulation);
        }

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

