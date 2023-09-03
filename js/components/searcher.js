
const Searcher = () => {

    const continents = [
        { value: null, name:""},
        { value: "Africa", name: "África" },
        { value: "Americas", name: "América" },
        { value: "Antarctica", name: "Antártida" },
        { value: "Asia", name: "Asia" },
        { value: "Europe", name: "Europa" },
        { value: "Cceania", name: "Oceanía" },
    ];

    return  `
    <div class="aside">
        <form>
            <input type="search" placeholder="Ingrese un nombre . . . ">
            <button type="submit"><i class="material-icons">search</i></button>
<br>
            <label value="region">Continente:</label>
            <select>
            ${continents.map((continent) =>
                `<option value:"${continent.value}">${continent.name}</option>`
            ).join()}
            </select>
<br>

            <label value="population">
                Cantidad minima de habitantes (1-1 400 000 000):
            </label>
            <input type="range" min="1" max="1400000000">
            <output>1</output>
        </form>

    </div>
    `
}
        
export default Searcher; 