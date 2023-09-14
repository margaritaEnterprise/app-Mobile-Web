import { isFav } from "../storage/storageFavs.js";

const Card = (country) => {       
    let code = country.cca3;
    

    return  `
    <div class="card" id="card${code}">
        <img onclick="viewDetail('${code}')" src="${country.flags.png}" alt="Bandera de ${country.flags.alt}" class="card__image"/>
        <h2 onclick="viewDetail('${code}')" class="card__title">${country.translations.spa.common}</h2>
        <p class="card__info">Continente: ${country.region}</p>
        <div class="card__links">
            ${isFav(code) ? 
                `<i id='${code}' class="addFavorites card__link__selected material-icons">star_rate</i>`
                :
                `<i id='${code}' class="addFavorites card__link material-icons">star_rate</i>`
            }
            <a href="./../pages/share.html?code=${code}" class="card__link"><i class="card__link material-icons">share</i></a>
        </div>
    </div>

    `
}

const viewDetail = (code) =>{
    window.location.href = `../../pages/detail.html?code=${code}`
}

window.viewDetail = viewDetail;

export default Card; 