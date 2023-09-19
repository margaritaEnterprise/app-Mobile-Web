const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
    try {
        return regex.test(email);
    }
    catch {
        return false;
    }
}
  
const validateFieldText = (text) =>{
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ' ]+$/g;
    try {
        return regex.test(email);
    }
    catch {
        return false;
    }
}

export default { validateEmail, validateFieldText }