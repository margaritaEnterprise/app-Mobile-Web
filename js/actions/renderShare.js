import Share from "../components/share.js";
import { getCountriesByCodes } from "../services/countries.js";
import NotFound from "../components/notFound.js";

const renderShare = async () => {
    let share = $("#share");

    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let country = await getCountriesByCodes([code]);
    if(country.length == 0) {
        share.html(NotFound());
    }
    share.html(Share(country[0]));
}

export default renderShare;