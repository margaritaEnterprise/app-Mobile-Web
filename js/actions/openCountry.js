import { getCountriesByCodes } from "../services/countries.js";
import { getCodes } from "./storageCodes.js";
import Detail from "../components/detail.js";

const openCountry = async () => {  
    let section = document.getElementById('detailCountry');
    section.innerHTML="";
    //spinner
    let arrayCodes = await getCodes();
    let response = await getCountriesByCodes(arrayCodes);
    response.map(country => {
        section.innerHTML += Detail(country);
    });
}

export default openCountry;