import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";
import renderDetail from "./render/renderDetail.js";
import { renderLoader } from "./render/renderLoader.js";
import { getCountriesByCodes } from "./services/countries.js";
import { setHistory }  from './storage/storageHistory.js';

import {setFavs, getFavs, isFav} from './storage/storageFavs.js'

const initDetail = async () => {
    renderHeader("");
    renderFooter();

    renderLoader($("#loader-container"));
    $("#loader-container").show();

    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);
    
    if(response.length == 0){
        window.location.href = "../pages/404.html"
    }

    setHistory(response[0].cca3);

    await renderDetail(response);
    $("#detailCountry").show()
    $("#loader-container").hide();
}

await initDetail();



$(document).ready(function () {
   favs();
});


function favs(){
    $(".addFavorites").off("click").on("click", function() {
        setFavs(this.id);
        let favStorage = getFavs();
        console.log(favStorage);
        if(isFav(this.id)) {

            $(this).addClass("country__favorite--quit");
            $(this).removeClass("country__favorite--add");
            $(this).empty().html(`<p> Quitar de favoritos <i class="material-icons">star_rate</i> </p>`)
        } else {
            $(this).addClass("country__favorite--add");
            $(this).removeClass("country__favorite--quit");
            $(this).empty().html(`<p> Agregar a favoritos <i class="material-icons">star_rate</i> </p>`)
        }
        favs();
    })
}