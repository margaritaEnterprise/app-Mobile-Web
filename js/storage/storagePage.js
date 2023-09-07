const setPage = (page) => {   
    localStorage.setItem('page', page);
}

const getPage = () => {
    if(localStorage.getItem('page')) {
        return localStorage.getItem('page');
    }
    return -1;
}

export { setPage, getPage };
