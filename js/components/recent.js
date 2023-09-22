
const Recent =  (countries) => {  //ccn3 es el codigo numerico del pais
    console.log(countries);
    let lastVisited = countries.map(country => `
        <article class="recent__country__container"> 
            <img onclick="viewDetail('${country.cca3}')" src="${country.flags.png}" alt="${country.name.common}"></img>
            <h2>${country.translations.spa.common}</h2>
        </article>
    `);

    return  `<div>
    <h2>Ultimos Visitados:</h2>
    <section class="recent__country__flag">
    ${lastVisited.join('')}
    </section>
</div>
    `
}

const viewDetail = (code) =>{
    window.location.href = `../../pages/detail.html?code=${code}`
}

window.viewDetail = viewDetail;

export default Recent;
