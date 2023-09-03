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

export { getCountries, getCountry }
