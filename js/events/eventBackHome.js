import renderHistory from "../render/renderHistory.js";
import  { cleanHistory }  from "../storage/storageHistory.js";

export const eventBackHome = async () => {
    $(".clean__history").click(async function (e) { 
        $("#loader-container").show();
        console.log();
        cleanHistory();
        $("#last").empty();
        await renderHistory();
        $("#loader-container").hide();
    });
}