import Searcher from "../components/searcher.js";

const renderSearcher = () => {
    $("#aside_search").html(Searcher());
    $(".search__body").hide();
    $("#searcher_input").click((e) => { 
        e.preventDefault();
        $(".search__body").show();
    });
    /*
    $('#searcher_input').on('click', () => {
        $('#searcher_body').css('display', 'block');
    });
*/


}

export default renderSearcher;