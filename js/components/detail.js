import { setHistory } from "../storage/storageHistory";


const Detail =  (country, borders) => {  //ccn3 es el codigo numerico del pais

    let name = country.translations.spa.common;
    let officialName = country.translations.spa.official;

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
        <p>⚫ ${currency.name} ${currency.symbol} (${currency.code})</p>`)
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

    let HTMLBordersArray = borders.map(border => `
        <img onclick="viewDetail('${border.code}')" class="country__img" src="${border.flag}" alt="${border.name}"></img>
    `);

    return  `
        <section class="country">
            <section class="country__details">
                <div class="country__name" >
                    <h1 class="" >${name}</h1>
                </div>
                <article class="country__flag">
                    <img class="country__img" src="${flag}" alt="Bandera de ${name}">
                </article>
                <article class="country-nameOfficial">
                    <h2>Nombre Oficial:</h2>
                    <p>${officialName}</p>
                </article>
            </section>

            <section class="country__details">
                <article class="country__currencies">
                    <h2>${HTMLCurrenciesArray.length  > 1 ? "Monedas:" : "Moneda:"}</h2>
                    
                    ${HTMLCurrenciesArray.join("\n")}
                    
                </article>

            </section>

            <section class="country__details">
                <article class="country__capital">
                    <h2>Capital:</h2>
                    <p>${capitals.join(", ")}</p>
                </article>
            </section>

            <section class="country__details">
                <article class="country__region">
                    <h2>Continente:</h2>
                    <p>${continent}</p>
                </article>
                <article class="country__region">
                    <h2>Región:</h2>
                    <p>${region}</p>
                </article>
            </section>

            <section class="country__details">
                <article class="country__language">
                    <h2>Idioma:</h2>
                    <p>${languagesArray.map(language => language.name).join(", ")}</p>
                </article>
            </section>

            <section class="country__details">
                <h2>Área y Población</h2>
                <article class="country__area">
                    <h2>Área:</h2>
                    <p>${area.toLocaleString()} km²</p>
                </article>
                <article class="country__population">
                    <h2>Población:</h2>
                    <p>${population.toLocaleString()}</p>
                </article>
            </section>

            <section class="country__details">
                <article class="country__timezones">
                    <h2>Husos Horarios:</h2>
                    <p>${timezones.join(', ')}</p>
                </article>
            </section>

            <section class="country__details">
            <h2>Escudo de Armas:</h2>
                <article class="country__coat">
                    <img class="country__flag" src="${coatOfArms}" alt="Escudo de Armas de Mauritania">
                </article>
            </section>

            <section class="country__details">
                <article class="country__map">
                    <h2>Mapa</h2>
                    <div id="map" class="country__bordersFlag"></div>
                </article>
            </section>

            <section class="country__details">
                <article class="country__borders">
                    <h2>Países Limítrofes:</h2>
                    <div class="country__bordersFlag">
                    ${HTMLBordersArray.length > 0 ?  HTMLBordersArray.join(''): "<p>No tiene</p>"}
                    </div>
                </article>
            </section>

        </section>
    `
}

const viewDetail = (code) =>{
    setHistory(code);
    window.location.href = `../../pages/detail.html?code=${code}`
}

window.viewDetail = viewDetail;
        
export default Detail; 