
const Card = (country) => {  //ccn3 es el codigo numerico del pais
                                    
    return  `
    <div class="card">
        <img src="${country.flags.png}" alt="Bandera de ${country.flags.alt}" class="card__image">
        <h2 class="card__title">${country.translations.spa.common}</h2>
        <p class="card__info">Continente: ${country.region}</p>
        <div class="card__links">
        <a href="./../pages/detail.html" class="open_detail" id=${country.ccn3}><i class="material-icons">visibility</i></a>
        ${country.ccn3%3 == 0 ? 
            `<a class="card__link"><i class="material-icons">stars</i></a>`
            :
            `<a class="card__link"><i class="material-icons">star_rate</i></a>`
        }
        <a href="./../pages/share.html" class="open_detail" id=${country.ccn3}><i class="material-icons">share</i></a>
        </div>
    </div>

    `
}
        
export default Card; 