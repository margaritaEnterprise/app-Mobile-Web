const setCodes = async (arrayCodes) => { 
    localStorage.setItem('codes', JSON.stringify(arrayCodes));
}

const getCodes = async () => { 
    if(localStorage.getItem('codes')) {
        let codes = localStorage.getItem('codes');
        return JSON.parse(codes);
    }
    return -1;
}
export { setCodes, getCodes };