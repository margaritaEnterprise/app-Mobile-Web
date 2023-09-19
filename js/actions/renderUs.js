import Us from "../components/us.js";

const renderUs = () => {
    let header = document.getElementById('detailUs');
    header.innerHTML = Us();
}

export default renderUs;