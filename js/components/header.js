
const Header = (page) =>{
    return `
    <nav class="header__nav">
        <div class="header__logo">
            <i class="material-icons header__logoIcon">language</i>
            <h1>WebApp</h1>
        </div>       
        <ul class="header__navList" id="navList">
            <li class="header__navItem ${page === "home"? "header__navItem--selected" : ""}" title="Inicio" id="home">
                <a href="./../pages/index.html"><button><i class="material-icons">home</i>Inicio</button></a>
            </li>
            <li class="header__navItem ${page === "favorites"? "header__navItem--selected" : ""}" title="Favoritos" id="star">
                <a href="./../pages/favorites.html"><button>
                    <i class="material-icons">star</i>
                    <!-- <i class="header__counter">(0)</i> -->
                Favoritos</button></a>
            </li>
            <li class="header__navItem ${page === "history"? "header__navItem--selected" : ""}" title="Historial" id="history">
                <a href="./../pages/history.html"><button> 
                    <i class="material-icons">history</i>
                Historial</button></a>
            </li>
            <li class="header__navItem ${page === "games"? "header__navItem--selected" : ""}" title="Juegos" id="game">
                <a href="./../pages/games.html"><button>
                    <i class="material-icons">sports_esports</i>
                Juegos</button></a>
            </li>
            <li class="header__navItem ${page === "aboutUs"? "header__navItem--selected" : ""}" title="Nosotros" id="game">
                <a href="./../pages/aboutUs.html"><button href="./../pages/aboutUs.html">
                    <i class="material-icons">diversity_3</i>
                Nosotros</button></a>
            </li>    
        </ul>
    </nav>
    `
}

export default Header;