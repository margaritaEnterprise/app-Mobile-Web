import Header from "../components/header.js";

const renderHeader = (page) => {
   $("#header").html(Header(page));
}

export default renderHeader;