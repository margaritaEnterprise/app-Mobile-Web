const getPage = () => {   
    let page = localStorage.getItem('page');
    return page;
}
export default getPage;