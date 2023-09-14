const URL = 'https://restcountries.com/v3.1'

const getCountries = async () => { 
    let result = []
    let response = await fetch(`${URL}/all`)
    if(response.ok){
        result = await response.json()
    }
    return result
}
//https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
//https://restcountries.com/v3.1/all?fields=name,capital,currencies
const getCountry = async (name) => { 
    let result = []
    let response = await fetch(`${URL}/${name}`)
    if(response.ok){
        result = await response.json()
    }
    return result
}

//https://restcountries.com/v3.1/alpha?codes=PSE,KWT,GIN,TKL,AFG,VGB,CAN
//Traer el detalle de un pais [ccn3]
//O traer la lista de favoritos [ccn3, ccn3, ... ccn3]
const getCountriesByCodes = async (arrayCodes) => { 
    console.log(arrayCodes)
    let stringCode = "";
    arrayCodes.map(code => {
        stringCode += code+",";
    });
    console.log(stringCode);
    let result = []
    let response = await fetch(`${URL}/alpha?codes=${stringCode}`)
    if(response.ok){
        result = await response.json()
    }

    return result
}

export { getCountries, getCountry, getCountriesByCodes }