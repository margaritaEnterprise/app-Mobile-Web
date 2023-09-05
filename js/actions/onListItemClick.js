import clear from './clear.js';
import { setCodes } from './storageCodes.js';


//CLICK
const onListItemClick = (elements) => {
    elements.forEach(element => {
    //nav icons o functions
        if (element.classList.contains('home')) { 
            element.addEventListener('click', () => clear()) 
        } else if (element.classList.contains('open_detail')) {
            element.addEventListener('click', () => setCodes([element.id]))
        } else if (element.classList.contains('open_detail')) {
            element.addEventListener('click', () => setCodes([element.id]))
        } 
    });
}

export default onListItemClick;