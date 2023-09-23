import { getCountriesByCodes } from "../services/countries.js";
import Detail from "../components/detail.js";
import NotFound from "../components/notFound.js";
import initMap from "../render/initMap.js";


const renderDetail = async (response) => {  

    let section = $("#detailCountry").empty();

    if(response.length == 0) {
        $(section).html(NotFound());
    }

    let borders = [];

    if(response[0].borders){
        borders = await getCountriesByCodes(response[0].borders);
        borders = borders.map(country => {
            return {
                name : country.translations.spa.common,
                code : country.cca3,
                flag : country.flags.png
            }
        });
    }
    response.map(country => {
        $(section).append(Detail(country, borders))
    });

    initMap(
            response[0].latlng[0],
            response[0].latlng[1],
            response[0].area
    );
}

export default renderDetail;