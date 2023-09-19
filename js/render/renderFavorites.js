import { getCountriesByCodes } from '../services/countries.js';
import { initFavs, getFavs } from './storageFavs.js';

const renderFavorites = async (section) => {
    initFavs(); //    let initArrayFavs = ['232', '630', '642', '028'];
    let codes = await getFavs();
    console.log("codes: " + codes)
    let countries = await getCountriesByCodes(codes);
    console.log(countries); 
}

export default renderFavorites; 


