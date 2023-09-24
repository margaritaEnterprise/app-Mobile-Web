import renderCountries from "../render/renderCountries.js";
import { getFavs, setFavs } from "../storage/storageFavs.js";
import { getCountriesByCodes } from "../services/countries.js";
import renderPaginator from "../render/renderPaginator.js";
import Card from '../components/card.js';
import noItems from "../components/noItems.js";

let countriesCode = getFavs();
let text = "Ya puedes agregar paises favoritos."

export function pagination (){
    $(".paginator__button").click(async function (event) {
        let section = $("#all").empty();
        $("#loader-container").show();
        let page = $(this).data("page") - 1;
        let countries = await  getCountriesByCodes(countriesCode.slice((page)*10,(page*10)+10));
        renderCountries(section, countries);
        $("#loader-container").hide();
        renderPaginator(countriesCode.length, page+1);
        pagination();
        quitFavorites();
    });
}


export function quitFavorites(){
    $(".addFavorites").off("click").on("click",async function() {
        countriesCode = countriesCode.filter(code => code !== this.id);
        setFavs(this.id);
        console.log(countriesCode.length);
        let currentPage = $(".active").data("page");
        $(`#card${this.id}`).remove();
        let newRenders = $(".card").length;
        if(newRenders == 0 && currentPage > 1){
            currentPage--;
            $("#loader-container").show();
            let countries = await getCountriesByCodes(countriesCode.slice((currentPage-1)*10,((currentPage-1)*10)+10));
            renderCountries($("#all"), countries);
            $("#loader-container").hide();
            renderPaginator(countriesCode.length, currentPage);
        }else if(newRenders == 9 && countriesCode.length >= 10) {
            let newCode = [countriesCode[(currentPage*10)-1]];
            console.log($(`#card${newCode}`));
            let countries = await getCountriesByCodes(newCode);
            $("#all").append(Card(countries[0]));
            renderPaginator(countriesCode.length, currentPage);
        }

        newRenders = $(".card").length;
        if(newRenders == 0){
            $(".paginator").hide();
            $(".main").append(noItems(text));
        }

        pagination();
        quitFavorites();
    });
}