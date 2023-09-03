
const Card = (country) => {

    return  `
    <div class="card">
        <img src=${country.flags.png} alt="Bandera de ${country.flags.alt}">
        <h2>${country.name.common}</h2>
        <p>Continente: ${country.region}</p>
        <a href=""><i class="material-icons">share</i></a>
        <a href=""><i class="material-icons">stars</i></a>
        <a href=""><i class="material-icons">star_rate</i></a>
    </div>
    `
}
        
export default Card; 