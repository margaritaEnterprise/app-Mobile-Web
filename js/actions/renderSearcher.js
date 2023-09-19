import Searcher from "../components/searcher.js";

const renderSearcher = () => {
    let aside = document.getElementById('aside_search');
    aside.innerHTML = Searcher();
}

export default renderSearcher;