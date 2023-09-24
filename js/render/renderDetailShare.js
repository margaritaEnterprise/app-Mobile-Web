import detailShare from "../components/detailShare.js";
import { getCountriesByCodes } from "../services/countries.js";
import Share from "../components/share.js";
import { cleanHistory } from "../storage/storageHistory.js";


const renderDetailShare = async () => {  
    let section = $("#detailCountry").empty();
    $(".clean__History").click((e) => { 
        //e.preventDefault();
        console.log("clear")
        cleanHistory();
    });
    const urlActual = window.location.href;
    const params = new URLSearchParams(new URL(urlActual).search);
    const code = params.get('code');

    let response = await getCountriesByCodes([code]);

    if(response.length == 0) {
        window.location.href = "../../pages/404.html"
    }

    response.map(country => {
        $(section).html(detailShare(country));
        let share = $("#share");
        share.html(Share());
        
        });

    

}

export default renderDetailShare;