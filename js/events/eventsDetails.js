import {setFavs, isFav} from '../storage/storageFavs.js'

export function favs(){
    $(".addFavorites").off("click").on("click", function() {
        setFavs(this.id);
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