const Stats = (country, views, total) => {   
    let code = country.cca3;
    let flag = country.flags.png;
    let alt = country.flags.alt;
    let name = country.translations.spa.common;
    console.log(name, views, total)
    let width = Math.round(100*views/total)
    console.log(width)
    //title="${name} \n  Visitas recibidas: ${views}\n  Total: ${total}" 
    //title="${name} ha recibido ${views} de ${total} visitas."
    return  `
    <article title="${name} ha recibido ${views} de ${total} visitas." class="stats" id="stats${code}">
        <img src="${flag}" alt="${name}" class="stats__flag" />
        <div class="stats__bar">
            <div class="stats__views" style="width: ${width}%;">
                <p class="stats__percent">${width}%</p>
            </div>
        </div>
    </article>

    `
}

export default Stats; 