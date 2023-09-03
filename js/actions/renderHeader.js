import Header from "../components/header.js";

const renderHeader = async (page) => {
    let header = document.getElementById('header');
    header.innerHTML = Header(page);
}

export default renderHeader;