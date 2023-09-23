import renderFooter from "./render/renderFooter.js";
import renderHeader from "./render/renderHeader.js";
import renderDetailShare from "./render/renderDetailShare.js";
import { renderLoader } from "./render/renderLoader.js";
import submitShare from "./events/submitShare.js";

const initShare = async () => {
    
    renderHeader("");
    renderFooter();
    renderLoader($("#loader-container"));
    $("#detailCountry").hide();
    $("#share").hide();
    $("#loader-container").show();
    await renderDetailShare();
    $("#loader-container").hide();

    $("#detailCountry").show();
    $("#share").show();
    submitShare();
}
await initShare(); 
