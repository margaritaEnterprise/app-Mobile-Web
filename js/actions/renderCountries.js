import { getCountries } from '../services/countries.js';

const renderCountries = async () => {
    let section = document.getElementById('all');
    let countries = await getCountries();
    console.log(countries);
    /*
    for (let i = 0; i < countries.length; i++) {
        section.innerHTML += Card(countries[i]);
    }
    */
   
    //onListItemClick --> agregar cosas de la card
}

export default renderCountries; 
