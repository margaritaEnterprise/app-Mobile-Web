import { getCountries } from '../services/countries.js';
import Card from '../components/card.js';

const renderCountries = async () => {
    let countries = await getCountries();
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
   
   let section = document.getElementById('all');
   section.innerHTML="";
   for (let i = 0; i < 10; i++) {
        section.innerHTML += Card(countries[i]);
    }
   
    //onListItemClick --> agregar cosas de la card
}

export default renderCountries; 
