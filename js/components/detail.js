
const Detail = (country) => {  //ccn3 es el codigo numerico del pais

    let name = country.translations.spa.common;

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
            code: languageCode,
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

    return  `
        <h1>Detalles de ${name}</h1>
        <div class="container">
            <section class="country-details">
                <h2>Información General</h2>
                <div class="country-info">
                    <h3>Nombre Oficial:</h3>
                    <p>${name}</p>
                </div>
                <div class="country-info">
                    <h3>Nombre Común:</h3>
                    <p>Mauritania</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Moneda</h2>
                <div class="country-info">
                    <h3>Moneda:</h3>
                    <p>${currenciesArray[0].name}</p>
                </div>
                <div class="country-info">
                    <h3>Símbolo de Moneda:</h3>
                    <p>${currenciesArray[0].symbol}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Capital</h2>
                <div class="country-info">
                    <h3>Capital:</h3>
                    <p>${capitals[0]}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Región y Subregión</h2>
                <div class="country-info">
                    <h3>Región:</h3>
                    <p>${continent}</p>
                </div>
                <div class="country-info">
                    <h3>Subregión:</h3>
                    <p>${region}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Idioma Oficial</h2>
                <div class="country-info">
                    <h3>Idioma:</h3>
                    <p>${languagesArray[0].name}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Coordenadas Geográficas</h2>
                <div class="country-info">
                    <h3>Latitud:</h3>
                    <p>${lat}</p>
                </div>
                <div class="country-info">
                    <h3>Longitud:</h3>
                    <p>${long}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Países Limítrofes</h2>
                <div class="country-info">
                    <h3>Países Limítrofes:</h3>
                    <p>${borders ?  borders.join(', '): "No tiene"}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Área y Población</h2>
                <div class="country-info">
                    <h3>Área:</h3>
                    <p>${area.toLocaleString()} km²</p>
                </div>
                <div class="country-info">
                    <h3>Población:</h3>
                    <p>${population.toLocaleString()}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Husos Horarios</h2>
                <div class="country-info">
                    <h3>Husos Horarios:</h3>
                    <p>${timezones.join(', ')}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Continentes</h2>
                <div class="country-info">
                    <h3>Continentes:</h3>
                    <p>${country.continents.join(', ')}</p>
                </div>
            </section>

            <section class="country-details">
                <h2>Enlaces</h2>
                <div class="country-info">
                    <h3>Google Maps:</h3>
                    <a href="${country.maps.googleMaps}">Ver en Google Maps</a>
                </div>
            </section>

            <section class="country-details">
                <h2>Bandera</h2>
                <div class="country-info">
                    <h3>Bandera:</h3>
                    <img class="flag" src="${flag}" alt="Bandera de Mauritania">
                </div>
            </section>

            <section class="country-details">
                <h2>Escudo de Armas</h2>
                <div class="country-info">
                    <h3>Escudo de Armas:</h3>
                    <img class="flag" src="${coatOfArms}" alt="Escudo de Armas de Mauritania">
                </div>
            </section>
        </div>
    `
}
        
export default Detail; 