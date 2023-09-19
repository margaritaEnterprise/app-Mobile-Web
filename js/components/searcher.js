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
  
    
    const regions = [
      { value: null, name: "" },
      { name: 'Western Africa', continent: 'Africa' },
      { name: 'Eastern Africa', continent: 'Africa' },
      { name: 'Caribbean', continent: 'Americas' },
      { name: 'Southeast Europe', continent: 'Europe' },
      { name: 'Australia and New Zealand', continent: 'Oceania' },
      { name: 'South America', continent: 'Americas' },
      { name: 'Southern Europe', continent: 'Europe' },
      { name: 'Southern Africa', continent: 'Africa' },
      { name: 'Middle Africa', continent: 'Africa' },
      { name: 'Western Asia', continent: 'Asia' },
      { name: 'Northern Europe', continent: 'Europe' },
      { name: 'South-Eastern Asia', continent: 'Asia' },
      { name: 'Eastern Asia', continent: 'Asia' },
      { name: undefined, continent: 'Antarctic' },
      { name: 'Micronesia', continent: 'Oceania' },
      { name: 'Southern Asia', continent: 'Asia' },
      { name: 'Western Europe', continent: 'Europe' },
      { name: 'Central Asia', continent: 'Asia' },
      { name: 'Northern Africa', continent: 'Africa' },
      { name: 'North America', continent: 'Americas' },
      { name: 'Central Europe', continent: 'Europe' },
      { name: 'Polynesia', continent: 'Oceania' },
      { name: 'Melanesia', continent: 'Oceania' },
      { name: 'Eastern Europe', continent: 'Europe' },
      { name: 'Central America', continent: 'Americas' }
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
        id="searcher_input"
        />
        <button type="submit" class="searcher__button">
            <i class="material-icons">search</i>
        </button>
        </div>  
          <br />
          <label for="region" class="searcher__label">Continente:</label>
          <article class="searcher__filters">
            ${HTMLcontinentsArray.join("")}
          </article>
          <br />

          <label for="population" class="searcher__label">
            Cantidad mínima de habitantes (1-1 400 000 000):
          </label>
          <input
            type="range"
            id="population"
            class="searcher__range"
            min="1"
            max="1400000000"
          />
          <output class="searcher__output">1</output>
        </form>
    `;
};


{/* <label for="subregion" class="searcher__label">Region: </label>
<select id="subregion" class="searcher__select">
  ${regions
    .map(
      (regions) =>
        `<option value="${regions.name}">${regions.name}</option>`
    )
    .join("")}
</select>
<br /> */}

export default Searcher;

