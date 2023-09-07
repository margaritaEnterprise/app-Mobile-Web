import { getCountries, getCountriesByCodes } from '../services/countries.js';
import Card from '../components/card.js';
import renderPaginator from './renderPaginator.js';
import { initFavs, getFavs, setFavs } from './storageFavs.js';
import onListItemClick from './onListItemClick.js';

const renderFavorites = async (section) => {
    initFavs(); //    let initArrayFavs = ['232', '630', '642', '028'];
    let codes = await getFavs();
    console.log("codes: " + codes)
    let countries = await getCountriesByCodes(codes);
    console.log(countries); 
}

export default renderFavorites; 


