import renderFooter from "./actions/renderFooter.js";
import renderHeader from "./actions/renderHeader.js";
import renderDetailShare from "./actions/renderDetailShare.js";

const initShare = async () => {
    
    renderHeader("");
    renderFooter();
    await renderDetailShare();    
      
}

window.onload = initShare; 