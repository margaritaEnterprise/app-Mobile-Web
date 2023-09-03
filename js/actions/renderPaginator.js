import Paginator from "../components/paginator.js";

const renderPaginator = (total) => {
    let aside = document.getElementById('pagination');
    aside.innerHTML = Paginator(total);
}

export default renderPaginator;