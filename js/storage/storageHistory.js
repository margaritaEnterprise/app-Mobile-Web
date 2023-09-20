const getHistory = () => { 
    if(localStorage.getItem('history')) {
        let array = localStorage.getItem('history');
        return JSON.parse(array);
    }
    return {}
}

const setHistory = (view) => { 
    let dicc = getHistory(); //{ 'PAN': {view:5,date:x }, 'VGB':2, 'PSE': 4, 'FSM': 1 } o {}
    console.log(dicc)
    console.log(dicc[view])
    if(dicc[view] && dicc[view].views > 0) { //existe --> sumar 1
        console.log("if existe en el dicc")
        let value = dicc[view].views;
        dicc[view].views = value + 1;
        dicc[view].date = Date.now();
    } else {
        console.log("if no existe en el dicc")
        
        //no existe --> iniciar en 1
        dicc[view] = {views: 1, date: Date.now()};
    }
    localStorage.setItem('history', JSON.stringify(dicc));
    return;
}

const cleanHistory = () => { 
    localStorage.setItem('history', JSON.stringify({}));
}

export { setHistory, getHistory, cleanHistory };