import { isFav } from "../storage/storageFavs.js";
const Detail =  (country, borders) => {  //ccn3 es el codigo numerico del pais

    let name = country.translations.spa.common;
    let officialName = country.translations.spa.official;
    console.log(country);
    let currenciesArray = [];
    let HTMLCurrenciesArray ;
    if(country.currencies){
        currenciesArray = Object.keys(country.currencies).map(currencyCode => {
            return {
                code: currencyCode,
                name: country.currencies[currencyCode].name,
                symbol: country.currencies[currencyCode].symbol
            };
        });

        HTMLCurrenciesArray = currenciesArray.map(currency => `
        <p>${currency.name} ${currency.symbol} (${currency.code})</p>`)
    }else{
        currenciesArray.push("No tiene");
        HTMLCurrenciesArray = currenciesArray.map(currency => `
        <p>${currency}</p>`)
    }

    let capitals = country.capital ? country.capital : ["No tiene"];
    let continent = country.region;
    let region = country.subregion ? country.subregion : "No pertenece a ninguna";
    let languagesArray = [];
    if(country.languages){
        languagesArray = Object.keys(country.languages).map(languageCode => {
            return {
                name: country.languages[languageCode]
            };
        });
    }else{
        languagesArray.push("No tiene");
    }
    let lat = country.latlng[0]; let long = country.latlng[1];
    let area = country.area;
    let population = country.population;
    let timezones = country.timezones;
    let flag = country.flags.png;
    let coatOfArms = country.coatOfArms.png;

    let isAFav = isFav(country.cca3);

    console.log(isAFav);

    let HTMLBordersArray = borders.map(border => `
        <div class="country__borderContainer"> 
            <img onclick="viewDetail('${border.code}')" class="country__img" src="${border.flag}" alt="${border.name}"></img>
            <h2 class="country_borderName">${border.name}</h2>
        </div>
    `);

    return  `
        <section class="country">
                <div class="country__details country__name ${!coatOfArms ? "country__name--extended" : ""}">
                    <h1 class="" >${name}</h1>
                    <article class="country__flag">
                        <img class="country__img" src="${flag}" alt="Bandera de ${name}">
                    </article>
                    <article class="country-nameOfficial">
                        <h2>Nombre Oficial: </h2>
                        <p>${officialName}</p>
                    </article>
                </div>
                <div class="country__details country__currencies">
                    <h2> ${HTMLCurrenciesArray.length  > 1 ? "Monedas:" : "Moneda:"}</h2>
                    ${HTMLCurrenciesArray.join("\n")}
                </div>
                <div class="country__details country__capital">
                    <h2>Capital:</h2>
                    <p>${capitals.join(", ")}</p>
                </div>
                <div class="country__details country__region">
                    <h2>Continente:</h2>
                    <p>${continent}</p>
                </div>
                <div class="country__details country__subregion">
                    <h2>Región:</h2>
                    <p>${region}</p>
                </div>
                <div class="country__details country__language">
                    <h2>Idioma:</h2>
                    <p>${languagesArray.map(language => language.name).join(", ")}</p>
                </div>
                <div class="country__details country__area">
                    <h2>Área:</h2>
                    <p>${area.toLocaleString()} km²</p>
                </div>
                <div class="country__details country__population">
                    <h2>Población:</h2>
                    <p>${population.toLocaleString()}</p>
                </div>
                <div class="country__details country__timezones">
                    <h2>Husos Horarios:</h2>
                    <p>${timezones.join(', ')}</p>
                </div>
                <div class="country__details country__coat" style="${!coatOfArms ? "display:none" : ""}">
                    <h2>Escudo de Armas:</h2>
                    <img lazy class="country__flag" src="${coatOfArms}" alt="Escudo de Armas de Mauritania">
                </div>
                <div class="country__details country__map">
                    <h2>Mapa</h2>
                    <div id="map" class="country__bordersFlag"></div>
                </div>
                <div class="country__details country__borders">
                    <h2>Países Limítrofes:</h2>
                    <div class="country__bordersFlag">
                    ${HTMLBordersArray.length > 0 ?  HTMLBordersArray.join(''): "<p>No tiene</p>"}
                    </div>
                </div>
                <div id='${country.cca3}'  class="addFavorites country__details country__favorite ${isAFav ? "country__favorite--quit" : "country__favorite--add"}">
                    ${isAFav ? 
                        `<p> Quitar de favoritos <i class="material-icons">star_rate</i> </p>`
                        :
                        `<p>Agregar a favoritos <i class="  material-icons">star_rate</i> </p>`
                    }
                </div>
                <div onclick="shareCountry('${country.cca3}')" class="country__details country__share">
                    <p>Compartilo con tus amigos <i  class=" material-icons">share</i></p>
                </div>
               
                
        </section>
    `
}

const viewDetail = (code) =>{
    window.location.href = `../../pages/detail.html?code=${code}`
}

const shareCountry = (code) =>{
    window.location.href = `../../pages/share.html?code=${code}`
}

window.shareCountry = shareCountry;
window.viewDetail = viewDetail;
        
export default Detail; 