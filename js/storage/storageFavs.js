const getFavs = () => { 
    if(localStorage.getItem('favs')) {
        let arrayFavs = localStorage.getItem('favs');
        return JSON.parse(arrayFavs);
    }
    return []
}

const setFavs = (fav) => { 
    let arrayFavs = getFavs(); //[1, 2, 3] o []
    if(arrayFavs.includes(fav)) {
        let pos = arrayFavs.indexOf(fav);
        arrayFavs.splice(pos, 1)
    } else {
        arrayFavs.unshift(fav); //agregar al principio
    }
    localStorage.setItem('favs', JSON.stringify(arrayFavs));
    return;
}

const isFav = (code) => {
    let arrayFavs = getFavs(); //[1, 2, 3] o []
    if(arrayFavs.indexOf(code) != -1) return true;
    return false;
}


export { setFavs, getFavs, isFav };