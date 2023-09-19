const Paginator = (total, currentPage, perPage) => {
    const totalPages = Math.ceil(total / perPage);

    const pageButtons = [];
    const indexPages = [];
    let pageRange;
    if(currentPage == 1 || currentPage == totalPages){
        pageRange = 2
    }else{
        pageRange = 1
    }

    const minPage = Math.max(1, currentPage - pageRange);
    const maxPage = Math.min(totalPages, currentPage + pageRange);

    if (currentPage > 1) {
        pageButtons.push('<a href="#" class="paginator__button" data-page="1"><i class="material-icons">keyboard_double_arrow_left</i></a>');
        pageButtons.push('<a href="#" class="paginator__button" data-page="' + (currentPage - 1) + '"><i class="material-icons">chevron_left</i></a>');
    }

    for (let page = minPage; page <= maxPage; page++) {
        const isActive = currentPage === page ? 'active' : '';
        pageButtons.push('<a href="#" class="paginator__button ' + isActive + '" data-page="' + page + '">' + page + '</a>');

        indexPages.push(page);
    }

    if (currentPage < totalPages) {
        pageButtons.push('<a href="#" class="paginator__button" data-page="' + (currentPage + 1) + '"><i class="material-icons">chevron_right</i></a>');
        pageButtons.push('<a href="#" class="paginator__button" data-page="' + totalPages + '"><i class="material-icons">keyboard_double_arrow_right</i></a>');
    }

    if(currentPage > 1 && currentPage < totalPages){
        if(indexPages.includes(1)){
            pageButtons.shift();
        }
        if(indexPages.includes(totalPages)){
            pageButtons.pop();
        }
    }

    return `
        <div class="paginator">
            ${pageButtons.join('')}
        </div>
    `;
};

export default Paginator;


