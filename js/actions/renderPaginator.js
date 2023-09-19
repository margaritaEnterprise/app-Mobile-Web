import Paginator from "../components/paginator.js";

const renderPaginator = (total,current) => {
    let aside = document.getElementById('pagination');
    aside.innerHTML = Paginator(total, current, 10);
}

export default renderPaginator;