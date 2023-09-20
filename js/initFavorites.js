import renderHeader from "./render/renderHeader.js";
import renderFooter from "./render/renderFooter.js";
import { renderLoader }  from "./render/renderLoader.js";
import renderCountries from "./render/renderCountries.js";
import { isFav, getFavs } from "./storage/storageFavs.js";
import { getCountriesByCodes } from "./services/countries.js";
import noFavorites from "./components/noFavorites.js";

const initFavorites = async () => {
    renderHeader("favorites");
    renderFooter();
    renderLoader($("#loader-container"));
    $("#loader-container").show();
    let codes = getFavs();
    console.log("codes: " + codes)
    let section = $("#all");
    
    if(codes.length == 0){
        $("#loader-container").hide();
        $(section).html(noFavorites()); 
    } 
    else {   
        let countries = await getCountriesByCodes(codes);
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
