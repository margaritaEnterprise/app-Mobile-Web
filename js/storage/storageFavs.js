const initFavs = () => { 
    console.log("init Fav")
    let initArrayFavs = ['232', '630', '642', '028'];
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


export { initFavs, setFavs, getFavs };