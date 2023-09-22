
const Header = (page) =>{
    return `
    <div class="header__logo">
        <i class="material-icons header__logoIcon">language</i>
        <h1>WebApp</h1>
    </div>  
    <nav class="header__nav">
        <ul class="header__navList" id="navList">
            <li class="header__navItem ${page === "home"? "header__navItem--selected" : ""}" title="Inicio" id="home">
                <a class="header__Navlink" href="./../pages/index.html">
                  <i class="material-icons">home</i>
                  <p>Inicio</p>
                </a>
            </li>
            <li class="header__navItem ${page === "favorites"? "header__navItem--selected" : ""}" title="Favoritos" id="star">
                <a class="header__Navlink" href="./../pages/favorites.html">
                    <i class="material-icons">star</i>
                    <p>Favoritos</p>
                </a>
            </li>
            <li class="header__navItem ${page === "history"? "header__navItem--selected" : ""}" title="Historial" id="history">
                <a  class="header__Navlink" href="./../pages/history.html"> 
                    <i class="material-icons">history</i>
                    <p>Historial</p>
                </a>
            </li>
            <li class="header__navItem ${page === "aboutUs"? "header__navItem--selected" : ""}" title="Nosotros" id="game">
                <a class="header__Navlink" href="./../pages/aboutUs.html">
                    <i class="material-icons">diversity_3</i>
                    <p class="">Nosotros</p>
                </a>
            </li>    
        </ul>
    </nav>
    `
}

export default Header;