import Header from "../components/header.js";

const renderHeader = (page) => {
    let header = document.getElementById('header');
    header.innerHTML = Header(page);
}

export default renderHeader;