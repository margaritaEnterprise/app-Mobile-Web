
const detailShare = (country) => {  //ccn3 es el codigo numerico del pais
    //<a href="./../pages/detail.html" class="open_detail" id=${}>          </a>       
    let code = country.cca3;

    return  `
    <div class="card">
        <img onclick="viewDetail('${code}')" src="${country.flags.png}" alt="Bandera de ${country.flags.alt}" class="card__image"/>
        <h2 onclick="viewDetail('${code}')" class="card__title">${country.translations.spa.common}</h2>
        <p class="card__info">Continente: ${country.region}</p>
        <div class="card__continent">
            <img src="../../assets/${country.region}-outline.png" />
        </div>
    </div>

    `
}


const viewDetail = (code) =>{
    window.location.href = `../../pages/detail.html?code=${code}`
}

window.viewDetail = viewDetail;

export default detailShare; 