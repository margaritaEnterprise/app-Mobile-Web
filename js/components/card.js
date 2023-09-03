
const Card = (country) => {

    return  `
    <div class="card">
        <img src=${country.flags.png} alt="Bandera de ${country.flags.alt}">
        <h2>${country.name.common}</h2>
        <p>Continente: ${country.region}</p>
    </div>
    `
}
        
export default Card; 