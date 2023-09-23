const noItems = (string) => {       
    return  `
    <div class="clean__noItemsContainer">
        <div class="clean__noItems" >
            <p>${string}</p>    
            <button onclick="backHome()" type="submit" class="back__button">Volver</button>
        </div>
    </div>
`
}

export const noItemsSearch = () => {       
    return  `
    <div class='no-results-container'>
                                <p>No se han encontrado paises</p>
    </div>
`
}

const backHome = () =>{
    window.location.href = '../../pages/index.html'
}

window.backHome = backHome;

export default noItems; 
