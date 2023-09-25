import renderCountries from "../render/renderCountries.js";
import { getCountriesByCodes, getCountry } from "../services/countries.js";
import renderPaginator from "../render/renderPaginator.js";
import { noItemsSearch } from "../components/noItems.js";
import { setFavs, getFavs, isFav } from "../storage/storageFavs.js";

let countriesCode;

export function sendCountriesCodes(countriesCode1) { 
    countriesCode = countriesCode1
}

export function changeFilters(){
    $(".searcher__buttonFilter").click(function (event) {
        event.preventDefault();
        $(this).toggleClass("searcher__buttonFilter--selected");

        let container = $(".searcher__filters");
        let elements = container.find(".searcher__buttonFilter");

        elements.sort(function (a, b) {
            let isSelectedA = $(a).hasClass("searcher__buttonFilter--selected") ? -1 : 1;
            let isSelectedB = $(b).hasClass("searcher__buttonFilter--selected") ? -1 : 1;
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

export function search(){
    $(".searcher__form").submit(async function (event) {
        event.preventDefault();
        $("#filtersNotApplied").empty();

       $(".paginator").empty();

        const appliedFilters = $(".searcher__applied-filters");
        $(appliedFilters).empty();

        let section = $("#all").empty();

        $("#loader-container").show();

        let valueInput = $("#searcher_input").val().toLowerCase().trim();
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
            appliedFilters.append(`
                <span  id="cleanFilters" class="clean-filter clean-filter--none material-symbols-outlined">
                    mop
                </span>`);
            filterPill.forEach( pill => appliedFilters.append(pill));
        }
        
        if(minPopulation) {
            filteredCountries = filteredCountries.filter(country => country.population >= minPopulation);
        }

        if(maxPopulation){
            filteredCountries = filteredCountries.filter(country => country.population <= maxPopulation);
        }

        filteredCountries = filteredCountries.filter(country => country.translations.spa.common.toLowerCase().includes(valueInput));

        countriesCode = filteredCountries.map(country => {return {"cca3" : country.cca3}});

        renderCountries(section, filteredCountries.slice(0, 10));
        renderPaginator(countriesCode.length,1);
        
        if(filteredCountries.length == 0){
            $("#all").append(noItemsSearch());
        }

        $("#loader-container").hide();

        pag();
        addFavorites();
        cleanFilters();
    });

}

export function pag(){
    $(".paginator__button").click(async function (event) {
        let section = $("#all").empty();
        $("#loader-container").show();
        let page = $(this).data("page") - 1
        let countries = await getCountriesByCodes(countriesCode.slice((page)*10,(page*10)+10).map(x => x.cca3));
        renderCountries(section, countries);
        $("#loader-container").hide();
        renderPaginator(countriesCode.length, page+1);
        pag();
        addFavorites()
    });
}

export function toggleMenu(){
    const toggleButton = $(".toggle-searcher").find("i");
    const searcherBody = $(".search__body");

    toggleButton.click(function() {
        toggleButton.toggleClass("rotated");
        if (searcherBody.hasClass("show")) {
            searcherBody.css("max-height", "0");
            searcherBody.removeClass("show");
        } else {
            searcherBody.addClass("show");
            searcherBody.css("max-height", "1000px");
        }
    });
}

export function addFavorites(){
    $(".addFavorites").click(function() {
        console.log("hola");
        setFavs(this.id);
        let favStorage = getFavs();
        console.log(favStorage);
        if(isFav(this.id)) {
            $(this).removeClass("card__link");
            $(this).addClass("card__link__selected");
        } else {
            $(this).removeClass("card__link__selected");
            $(this).addClass("card__link");

        }
    })
}

export function cleanFilters(){
    $("#cleanFilters").click(async function() {
        $("#loader-container").show();
        $("#minPopulation").val("");
        $("#maxPopulation").val("");
        $(".searcher__buttonFilter--selected").removeClass("searcher__buttonFilter--selected");
        $(".searcher__applied-filters").empty();
        $(".paginator").empty();
        let section = $("#all").empty();
        let valueInput = $("#searcher_input").val().toLowerCase();
        let countries  = await getCountry(valueInput);
        let filteredCountries = countries.filter(country => country.translations.spa.common.toLowerCase().includes(valueInput));
        countriesCode = filteredCountries.map(country => {return {"cca3" : country.cca3}});
        renderCountries(section, filteredCountries.slice(0, 10));
        renderPaginator(countriesCode.length,1);
        if(filteredCountries.length == 0){
            $("#all").append(noItemsSearch());
        }
        $("#loader-container").hide();
        pag();
        addFavorites();
        cleanFilters();
    })
}