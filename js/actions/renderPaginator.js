import Paginator from "../components/paginator.js";

const renderPaginator = (total,current) => {
    $("#pagination").html(Paginator(total, current, 10));
}

export default renderPaginator;