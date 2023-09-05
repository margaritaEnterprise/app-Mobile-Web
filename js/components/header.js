
const Header = (page) =>{
    return `
    <nav class="header__nav">
        <img class="header__logo" src="" alt="logo">
        <ul class="header__navList" id="navList">
            <li class="header__navItem ${page === "home"? "header__navItem--selected" : ""}" title="Inicio" id="home">
                <a href="index.html">
                    <i class="material-icons">home</i>
                </a>
            </li>
            <li class="header__navItem ${page === "favorites"? "header__navItem--selected" : ""}" title="Favoritos" id="star">
                <a href="./../pages/favorites.html">
                    <i class="material-icons">star</i>
                    <!-- <i class="header__counter">(0)</i> -->
                </a>
            </li>
            <li class="header__navItem ${page === "history"? "header__navItem--selected" : ""}" title="Historial" id="history">
                <a href="./../pages/history.html"> 
                    <i class="material-icons">history</i>
                </a>
            </li>
            <li class="header__navItem ${page === "games"? "header__navItem--selected" : ""}" title="Juegos" id="game">
                <a href="./../pages/games.html">
                    <i class="material-icons">sports_esports</i>
                </a>
            </li>
            <li class="header__navItem ${page === "aboutUs"? "header__navItem--selected" : ""}" title="Nosotros" id="game">
                <a href="./../pages/aboutUs.html">
                    <i class="material-icons">diversity_3</i>
                </a>
            </li>    
        </ul>
    </nav>
    `
}

export default Header;