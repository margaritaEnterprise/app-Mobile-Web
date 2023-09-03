
const Card = (country) => {

    return  `
    <div class="card">
        <img src="${country.flags.png}" alt="Bandera de ${country.flags.alt}" class="card__image">
        <h2 class="card__title">${country.name.common}</h2>
        <p class="card__info">Continente: ${country.region}</p>
        <div class="card__links">
            <a href="#" class="card__link"><i class="material-icons">share</i></a>
            <a href="#" class="card__link"><i class="material-icons">stars</i></a>
            <a href="#" class="card__link"><i class="material-icons">star_rate</i></a>
        </div>
    </div>

    `
}
        
export default Card; 