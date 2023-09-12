
const Detail = (country) => {  //ccn3 es el codigo numerico del pais

    let name = country.translations.spa.common;

    let officialName = country.translations.spa.official;

    const currenciesArray = Object.keys(country.currencies).map(currencyCode => {
        return {
            code: currencyCode,
            name: country.currencies[currencyCode].name,
            symbol: country.currencies[currencyCode].symbol
        };
    });
    let capitals = country.capital;

    let continent = country.region;

    let region = country.subregion;

    const languagesArray = Object.keys(country.languages).map(languageCode => {
        return {
            name: country.languages[languageCode]
        };
    });

    let lat = country.latlng[0];

    let long = country.latlng[1];

    let borders = country.borders;

    let area = country.area;

    let population = country.population;

    let timezones = country.timezones;

    let flag = country.flags.png;

    let coatOfArms = country.coatOfArms.png;

    let HTMLCurrenciesArray = currenciesArray.map(currency => `
    <p>⚫ ${currency.name} ${currency.symbol} (${currency.code})</p>`)

    return  `
        <section class="country">
            <section class="country__details">
                <div class="country__name" >
                    <h1 class="" >${name}</h1>
                </div>
                <article class="country__flag">
                    <img class="country__img" src="${flag}" alt="Bandera de Mauritania">
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
                <article class="country__coat">
                    <h2>Escudo de Armas:</h2>
                    <img class="country__flag" src="${coatOfArms}" alt="Escudo de Armas de Mauritania">
                </article>
            </section>

            <section class="country__details">
                <article class="country__borders">
                    <h2>Países Limítrofes:</h2>
                    <p>${borders ?  borders.join(', '): "No tiene"}</p>
                </article>
            </section>

        </section>
    `
}
        
export default Detail; 