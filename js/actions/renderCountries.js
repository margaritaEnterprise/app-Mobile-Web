import { getCountries } from '../services/countries.js';
import Card from '../components/card.js';
import renderPaginator from './renderPaginator.js';
import { setPage, getPage } from './storagePage.js';
import onListItemClick from './onListItemClick.js';

const renderCountries = async () => {
    let countries = await getCountries();
    let total = countries.length;
    console.log(countries);

    //countries.slice(x, x+10); --> 0-10, 10-20
    //almaceno el indice x
    //o la pagina
    //const index = JSON.parse(localStorage.getItem('page'));
    /*
    page 1:     0    -   10
    page 2:    10    -   20
    page 3:    20    -   ...
    page X: 10*(x-1) -  10*x
    */
    if(getPage() < 0) {
        setPage(1);
    }

    let start = 10*(getPage()-1);
    let end = 10*getPage();
    console.log(`start ${start} \nend ${end}`)
    let section = document.getElementById('all');
    section.innerHTML="";
    for (start; start < end; start++) {
        section.innerHTML += Card(countries[start]);
    }
    renderPaginator(total);
    onListItemClick(document.querySelectorAll(".open_detail"));
    
}

export default renderCountries; 


