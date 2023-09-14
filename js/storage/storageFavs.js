const initFavs = () => { 
    console.log("init Fav")
    let initArrayFavs = ["PSE", "KWT", "GIN", "TKL", "AFG", "VGB", "CAN"];

    localStorage.setItem('favs', JSON.stringify(initArrayFavs));
}

const getFavs = async  () => { 
    console.log("get Fav")

    if(localStorage.getItem('favs')) {
        let arrayFavs = localStorage.getItem('favs');
        return JSON.parse(arrayFavs);
    }
    initFavs();
    return [];
}

const setFavs = (fav) => { 
    console.log("set Fav")

    let arrayFavs = getFavs(); //[1, 2, 3] o []
    //si fav pertenece al array, lo saco
    console.log(arrayFavs);
    if (arrayFavs.indexOf(fav) != -1) {
        arrayFavs.push(fav);
        localStorage.setItem('favs', JSON.stringify(arrayFavs));
    } 
    return arrayFavs.filter(item => item != indexOf(fav));
}

const statusFavs = (code) => {
    return false;
}


export { initFavs, setFavs, getFavs, statusFavs };