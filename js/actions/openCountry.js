import { getCountriesByCodes } from "../services/countries.js";

const openCountry = async (arrayCodes) => {  
    let response = await getCountriesByCodes(arrayCodes);
    console.log(response);
}

export default openCountry;