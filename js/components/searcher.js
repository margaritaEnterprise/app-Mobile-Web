const Searcher = () => {
    const continents = [
        //{ value: null, name: "" },
        { value: "Africa", name: "África" },
        { value: "Americas", name: "América" },
        { value: "Antarctic", name: "Antártida" },
        { value: "Asia", name: "Asia" },
        { value: "Europe", name: "Europa" },
        { value: "Oceania", name: "Oceanía" }, 
    ];
  
    let HTMLcontinentsArray =  continents.map(continent => `
        <button class="searcher__buttonFilter" id="continent--${continent.value}" data-value="${continent.value}">
            <img class="searcher__img" src="../../assets/${continent.value}-outline.png">
            <p>${continent.name}</p>
        </button>
    `);

    return `
    <form class="searcher__form">
        <div class="search__header">
                <input
                type="search"
                class="searcher__input searcher__input--BorderNone"
                placeholder="Ingrese un nombre . . ."
                id="searcher_input"/>
            <button type="submit" class="searcher__button">
                <i class="material-icons">search</i>
            </button>
        </div>
        
        
        <div class="search__body">
            <label for="region" class="searcher__label">Continente:</label>
            <article class="searcher__filters">${HTMLcontinentsArray.join("")}</article>

            <label for="minPopulation" class="searcher__label">Cantidad mínima de habitantes:</label>
            <input
                type="number"
                id="minPopulation"
                class="searcher__input searcher__input__population"
                min="1"
                max="1399999999"
                placeholder="Mínimo"/>
            
            <label for="maxPopulation" class="searcher__label">Cantidad máxima de habitantes:</label>
            <input
                type="number"
                id="maxPopulation"
                class="searcher__input searcher__input__population"
                min="1"
                max="1400000000"
                placeholder="Máximo"/>
            <div class="searcher__actions">
                <button type="submit" class="searcher__search-button" id="searchButton">Buscar</button>
            </div>
        </div>
        <section class="searcher__info">
            <p class="searcher__info-text" id="filtersNotApplied"></p>
        </section>
        <section class="searcher__applied-filters"></section>
    </form>
      `;
};

export default Searcher;

