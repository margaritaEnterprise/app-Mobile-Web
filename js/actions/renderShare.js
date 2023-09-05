import Share from "../components/share.js";

const renderShare = async () => {
    let aside = document.getElementById('share');
    aside.innerHTML = Share();
}

export default renderShare;