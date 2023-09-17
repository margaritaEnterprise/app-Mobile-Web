const Paginator = (total, currentPage, perPage) => {
    const totalPages = Math.ceil(total / perPage); // Calcula el total de páginas

    // Inicializa el array para los botones de página
    const pageButtons = [];
    const indexPages = [];
    let pageRange;
    if(currentPage == 1 || currentPage == totalPages){
        pageRange = 2
    }else{
        pageRange = 1
    }

    // Calcula el número mínimo y máximo de página a mostrar dentro del rango
    const minPage = Math.max(1, currentPage - pageRange);
    const maxPage = Math.min(totalPages, currentPage + pageRange);

    // Calcula el número de página a la izquierda de la página actual
    const prevPage = Math.max(1, currentPage - (pageRange + 1));

    // Agrega botón de retroceso doble si no estás en la primera página
    if (currentPage > 1) {
        pageButtons.push('<a href="#" class="paginator__button" data-page="1"><i class="material-icons">keyboard_double_arrow_left</i></a>');
        pageButtons.push('<a href="#" class="paginator__button" data-page="' + (currentPage - 1) + '"><i class="material-icons">chevron_left</i></a>');
    }

    // Agrega números de página dentro del rango
    for (let page = minPage; page <= maxPage; page++) {
        const isActive = currentPage === page ? 'active' : '';
        pageButtons.push('<a href="#" class="paginator__button ' + isActive + '" data-page="' + page + '">' + page + '</a>');

        indexPages.push(page);
    }

    // Agrega botón de avance doble si no estás en la última página
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

    // Genera el HTML del paginador
    const paginatorHTML = `
        <div class="paginator">
            ${pageButtons.join('')}
        </div>
    `;

    // Devuelve el HTML del paginador
    return paginatorHTML;
};

export default Paginator;


