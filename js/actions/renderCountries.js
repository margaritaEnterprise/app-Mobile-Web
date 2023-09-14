import Card from '../components/card.js';
import renderPaginator from './renderPaginator.js';
import { setPage, getPage } from '../storage/storagePage.js';
import onListItemClick from './onListItemClick.js';
import { getFavs, setFavs, isFav } from '../storage/storageFavs.js';

const renderCountries = (section, countries) => { 
    /*VER PAGINADOR*/
    /*
    let total = countries.length;
    if(getPage() < 0) { setPage(1) }
    let start = 10*(getPage()-1);
    let end = 10*getPage();
    console.log(start);
    console.log(end);*/


    section.innerHTML = '';
    for (let i =0 ; i < countries.length; i++) {
        section.innerHTML += Card(countries[i]);
    }
    //renderPaginator(total);

    $(".addFavorites").click(function() {
        setFavs(this.id);
        let favStorage = getFavs();
        console.log(favStorage);
        if(isFav(this.id)) {
            $(this).addClass("card__link__selected");
            $(this).removeClass("card__link");
        } else {
            $(this).addClass("card__link");
            $(this).removeClass("card__link__selected");
        }
    })
}

export default renderCountries; 
