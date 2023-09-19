import renderHeader from "./actions/renderHeader.js";
import renderFooter from "./actions/renderFooter.js";
import { renderLoader }  from "./actions/renderLoader.js";
import renderCountries from "./actions/renderCountries.js";
import { isFav, setFavs, getFavs } from "./storage/storageFavs.js";
import { getCountriesByCodes } from "./services/countries.js";
import noFavorites from "./components/noFavorites.js";

const initFavorites = async () => {
    renderHeader("favorites");
    renderFooter();
    renderLoader($("#loader-container"));
    $("#loader-container").show();
    let codes = getFavs();
    console.log("codes: " + codes)
    let countries = await getCountriesByCodes(codes);
    let section = $("#all");
    if(countries.length == 0){
        $(section).html(noFavorites()); 
    } 
    else {   
        renderCountries(section, countries); 
        $(".addFavorites").click(function() {
            let favStorage = getFavs();
            console.log(favStorage);
            if(!isFav(this.id)) {
                setTimeout(() => {
                    $(`#card${this.id}`).remove(); 
                }, 100)
                if(getFavs().length == 0) {
                    $(section).html(noFavorites());
                }
                //alert("quitar");
            }
        });
    }

    $("#loader-container").hide();
}

window.onload = initFavorites;
