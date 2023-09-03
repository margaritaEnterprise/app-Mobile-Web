const Searcher = () => {
    const continents = [
      { value: null, name: "" },
      { value: "Africa", name: "África" },
      { value: "Americas", name: "América" },
      { value: "Antarctica", name: "Antártida" },
      { value: "Asia", name: "Asia" },
      { value: "Europe", name: "Europa" },
      { value: "Oceania", name: "Oceanía" }, // Corregido "Cceania" a "Oceania"
    ];
  
    const regions = [
      { value: null, name: "" },
      { value: "Africa", name: "África" },
      { value: "Americas", name: "América" },
      { value: "Antarctica", name: "Antártida" },
      { value: "Asia", name: "Asia" },
      { value: "Europe", name: "Europa" },
      { value: "Oceania", name: "Oceanía" }
    ]

    return `
      <div class="searcher">
      <form class="searcher__form">
        <div class="search__header">
        <input
        type="search"
        class="searcher__input searcher__input--inline"
        placeholder="Ingrese un nombre . . ."
        />
        <button type="submit" class="searcher__button">
            <i class="material-icons">search</i>
        </button>
        </div>  
          <br />
          <label for="region" class="searcher__label">Continente:</label>
          <select id="region" class="searcher__select">
            ${continents
              .map(
                (continent) =>
                  `<option value="${continent.value}">${continent.name}</option>`
              )
              .join("")}
          </select>
          <br />
          <label for="subregion" class="searcher__label">Region: </label>
          <select id="subregion" class="searcher__select">
            ${regions
              .map(
                (regions) =>
                  `<option value="${regions.value}">${regions.name}</option>`
              )
              .join("")}
          </select>
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
      </div>
    `;
  };
  
  export default Searcher;
  