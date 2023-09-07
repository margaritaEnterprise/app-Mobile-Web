import Card from '../components/card.js';
import renderPaginator from './renderPaginator.js';
import { setPage, getPage } from '../storage/storagePage.js';
import onListItemClick from './onListItemClick.js';

const renderCountries = (section, countries) => { // string class, array countries
    let total = countries.length;
    console.log(countries);
    /*VER PAGINADOR*/
    if(getPage() < 0) { setPage(1) }
    let start = 10*(getPage()-1);
    let end = 10*getPage();

    section.innerHTML = '';
    for (start; start < end; start++) {
        section.innerHTML += Card(countries[start]);
    }
    renderPaginator(total);

    /*Se guarda el cnn3 del pais para acceder al detalle*/
    //onListItemClick(document.querySelectorAll(".open_detail"));    
}

export default renderCountries; 
