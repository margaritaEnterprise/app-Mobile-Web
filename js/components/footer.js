
const Footer = () => {

    return  `
    <div class="footer__body">

        <div class="footer__aboutUs">
            <p>
                Somos Veronica y Nicolas, estudiantes de Ingeniería en Informática en la UNAJ, apasionados por la creación de aplicaciones móviles. En constante búsqueda de soluciones innovadoras y experiencias únicas en el mundo digital. 
                <br><a href="./../pages/aboutUs.html">Leer mas..</a>
            </p>       
        </div>
    
        <div class="footer__site">
            <a href="./../pages/index.html">Inicio</a> 
            <a href="./../pages/favorites.html">Favoritos</a> 
            <a href="./../pages/history.html">Historial</a> 
            <a href="./../pages/aboutUs.html">Nosotros</a> 
        </div>

        <div class="footer__network">
            <a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" title="Youtube"><i class="fab fa-youtube"></i></a>
        </div>
        <div class="footer__logo">
                <a href="../pages/index.html" ><img class="header__logoImg" src="../assets/logo2.png" alt="logo"></a>
        </div>
    </div>
    
    <div class="footer__footer">
        <a href='#' id="footer_up"><i class="material-icons" title="Inicio">keyboard_double_arrow_up</i></a>
        <p>© 2023 | Aplicaciones Moviles </p>
    </div>
    `
}
        
export default Footer; 