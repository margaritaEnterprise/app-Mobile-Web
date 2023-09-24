
const Header = (page) =>{
    return `
    <div class="header__logo">
        <a href="../pages/index.html" ><img class="header__logoImg" src="../assets/logo2.png" alt="logo"></a>
    </div>  
    <div class="header__navItem header__navItem--selected header__navItem--menu" title="Menu" id="menu">
                <i class="material-icons menu-icon">menu</i>
                <i class="material-icons close-icon">close</i>
                </a>
            </div>
    <nav class="header__nav">
        <ul class="header__navList" id="navList">
            <li class="header__navItem header__navItem--ocult ${page === "home"? "header__navItem--selected" : ""}" title="Inicio" id="home">
                <a class="header__Navlink" href="./../pages/index.html">
                  <i class="material-icons">home</i>
                  <p>Inicio</p>
                </a>
            </li>
            <li class="header__navItem header__navItem--ocult ${page === "favorites"? "header__navItem--selected" : ""}" title="Favoritos" id="star">
                <a class="header__Navlink" href="./../pages/favorites.html">
                    <i class="material-icons">star</i>
                    <p>Favoritos</p>
                </a>
            </li>
            <li class="header__navItem header__navItem--ocult ${page === "history"? "header__navItem--selected" : ""}" title="Historial" id="history">
                <a  class="header__Navlink" href="./../pages/history.html"> 
                    <i class="material-icons">history</i>
                    <p>Historial</p>
                </a>
            </li>
            <li class="header__navItem header__navItem--ocult ${page === "aboutUs"? "header__navItem--selected" : ""}" title="Nosotros" id="game">
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