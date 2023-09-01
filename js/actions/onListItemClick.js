import clear from './clear.js'

//CLICK
const onListItemClick = (elements) => {
    elements.forEach(element => {
    //nav icons o functions
        if (element.classList.contains('home')) { 
            element.addEventListener('click', () => clear()) 
        }
    });
}

export default onListItemClick;