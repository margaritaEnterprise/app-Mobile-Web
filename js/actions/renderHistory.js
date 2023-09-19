import Stats from '../components/stats.js';
import { getHistory } from '../storage/storageHistory.js';
import {getCountriesByCodes} from '../services/countries.js';

const renderHistory = async () => { 
    let section = document.getElementById('all')
    section.innerHTML = '';
    let history = getHistory(); //local storage {"cod": 5}
    let codes = Object.keys(history);
    let values = Object.values(history);
    let total = 0;
    values.forEach((int) => {
        total += int;
    });
    console.log(history);
    console.log(codes);
    
    if(codes.length == 0){
        section.innerHTML = "Historial vacio"
    } 
    else {
        let countries = await getCountriesByCodes(codes);
        console.log(countries);
        for (let i =0 ; i < countries.length; i++) {
            let code = countries[i].cca3;
            //console.log(history[code])
            section.innerHTML += Stats(countries[i], history[code], total);
        }
    }
}

export default renderHistory; 