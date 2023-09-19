const getHistory = () => { 
    if(localStorage.getItem('history')) {
        let array = localStorage.getItem('history');
        return JSON.parse(array);
    }
    return {}
}

const setHistory = (view) => { 
    let dicc = getHistory(); //{ 'PAN': 5, 'VGB':2, 'PSE': 4, 'FSM': 1 } o {}
    console.log(dicc)
    console.log(dicc[view])
    if(dicc[view] > 0) { //existe --> sumar 1
        console.log("if existe en el dicc")
        let value = dicc[view];
        dicc[view] = value + 1;
    } else {
        console.log("if no existe en el dicc")

        //no existe --> iniciar en 1
        dicc[view] = 1;
    }
    localStorage.setItem('history', JSON.stringify(dicc));
    return;
}

export { setHistory, getHistory };