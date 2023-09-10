
const Card = (country) => {  //ccn3 es el codigo numerico del pais
    //<a href="./../pages/detail.html" class="open_detail" id=${}>          </a>       

    return  `
    <div class="card">
        <img src="${country.flags.png}" alt="Bandera de ${country.flags.alt}" class="card__image"/>
        <h2 class="card__title">${country.translations.spa.common}</h2>
        <p class="card__info">Continente: ${country.region}</p>
        <div class="card__links">
            <i onclick=alert(${country.ccn3}) class="card__link material-icons">visibility</i>
            ${country.ccn3%3 == 0 ? 
                `<a class="card__link"><i class="card__link material-icons">stars</i></a>`
                :
                `<a class="card__link"><i class="card__link material-icons">star_rate</i></a>`
            }
            <a href="./../pages/share.html?code=${country.ccn3}" class="card__link open_detail" id=${country.ccn3}><i class="material-icons">share</i></a>
        </div>
    </div>

    `
}




export default Card; 