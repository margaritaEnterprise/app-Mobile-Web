import Stats from '../components/stats.js';
import { getHistory } from '../storage/storageHistory.js';
import {getCountriesByCodes} from '../services/countries.js';
import Recent from '../components/recent.js';
import noItems from '../components/noItems.js';

const renderHistory = async () => { 
    let section = $("#all").empty();
    let history = getHistory(); //local storage [{"cod": {views: 2, date:123}}]
    let codes = Object.keys(history);
    let values = Object.values(history); //{views: 1, date: x}
    let total = 0;
    values.forEach((obj) => {
        total += obj.views;
    });
    console.log(values);
    console.log(codes);
    
    let main = $("#main");
    if(codes.length == 0){
        $(".history__title").hide();
        let text = "Historial vacio."
        $(main).append(noItems(text));
    } 
    else {
        
        $(".history__title").show();
        let countries = await getCountriesByCodes(codes);
        for (let i =0 ; i < countries.length; i++) {
            let code = countries[i].cca3;
            //console.log(history[code])
            $(section).append(Stats(countries[i], history[code], total));
        }
        let stats = $(section).find(".stats");
        stats.sort((a,b) => {
            let valueA = $(a).data("value");
            let valueB = $(b).data("value");
            return valueB - valueA;
        })
        console.log(stats.slice(0,2));
        section.empty().append(stats.slice(0,10));

        //ordenar por date //HORRIBLE---------------------------------------------------
        let sectionLast = $(".last");
        const lista = Object.entries(history).map(([key, value]) => ({
            [key]: value
            }));
        // Ordenar la lista por el valor 'date' en orden descendente
        lista.sort((a, b) => {
            let valueA = a[Object.keys(a)[0]].date;
            let valueB = b[Object.keys(b)[0]].date;
            return valueB - valueA;
        })
        
        if(lista.length > 5) {
            lista.splice(6)
        }
        let lastCodes =[];
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            lastCodes.push(Object.keys(element)[0])
        }
        let recentCountries = await getCountriesByCodes(lastCodes);
        sectionLast.append(Recent(recentCountries))
    }
}


export default renderHistory; 