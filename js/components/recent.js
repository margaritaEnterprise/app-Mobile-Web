
const Recent =  (countries, listaO) => {  
    let lastVisited = listaO.map((el) => {

        let code = Object.keys(el)
        console.log(Object.keys(el))
        let country = countries.find((el) => el.cca3 == code)
        console.log(country)
        return`<article class="recent__country__container"> 
            <img onclick="viewDetail('${country.cca3}')" src="${country.flags.png}" alt="${country.name.common}"></img>
            <h2>${country.translations.spa.common}</h2>
        </article>
    `
        })
    
    /*let lastVisited = codes.map((code) => {
        console.log(code)    
    })
    countries.map(country => `
        <article class="recent__country__container"> 
            <img onclick="viewDetail('${country.cca3}')" src="${country.flags.png}" alt="${country.name.common}"></img>
            <h2>${country.translations.spa.common}</h2>
        </article>
    `);
*/
    return  `<div>
    <h2>Ultimos Visitados</h2>
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
