import { getCountriesByCodes } from "../services/countries.js";
import { getCodes } from "./storageCodes.js";
import Detail from "../components/detail.js";

//spinner o enviar por parametro el arraycodes
const renderDetail = async () => {  
    let section = document.getElementById('detailCountry');
    section.innerHTML="";
    let arrayCodes = await getCodes();
    let response = await getCountriesByCodes(arrayCodes);
    response.map(country => {
        section.innerHTML += Detail(country);
    });
}

export default renderDetail;