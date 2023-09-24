import Card from '../components/card.js';

const renderCountries = (section, countries) => { 
    
    $(section).empty();

    for (let i =0 ; i < countries.length; i++) {
         $(section).append(Card(countries[i]));
    }
    //renderPaginator(total);

}

export default renderCountries; 
