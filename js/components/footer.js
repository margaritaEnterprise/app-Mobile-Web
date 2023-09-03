
const Footer = () => {

    return  `
    <div class="footer__body">
    <div class="footer__icons">
        <h3 class="footer__title">Síguenos:</h3>
        <a href="#" title="Facebook" class="footer__icon"><i class="fab fa-facebook"></i></a>
        <a href="#" title="LinkedIn" class="footer__icon"><i class="fab fa-linkedin"></i></a>
        <a href="#" title="Twitter" class="footer__icon"><i class="fab fa-twitter"></i></a>
        <a href="#" title="Instagram" class="footer__icon"><i class="fab fa-instagram"></i></a>
        <a href="#" title="Youtube" class="footer__icon"><i class="fab fa-youtube"></i></a>
        <br>
        <a href="#" title="WebApp" style="display: inline-block;"> 
            <i class="material-icons">language</i>
        </a>
        <h3 class="footer__title">WebApp</h3>
    </div>
    
    <div class="footer__hour">
        <p>
            <a href="./../index.html" style="display: inline-block;">Inicio</a> |
            <a href="./../index.html" style="display: inline-block;">Favoritos</a> |
            <a href="./../index.html" style="display: inline-block;">Historial</a> |
            <a href="./../index.html" style="display: inline-block;">Juegos</a> |
            <a href="./../pages/aboutUs.html" style="display: inline-block;">Nosotros</a> 
        </p>
        <p class="footer__title">© 2023 | Aplicaciones Moviles </p>
    </div>
    <div class="footer__contact">
        <h3 class="footer__title">Nosotros</h3>
        <p class="footer__text">
            Somos lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala 
            lalala lalala. <a href="./../pages/aboutUs.html" class="footer__link">Leer mas..</a>
        </p>       
    </div>
</div>
<div class="footer__footer">
    <a href='#' id="footer__up" class="footer__link"><i class="material-icons" title="Inicio">keyboard_double_arrow_up</i></a>
</div>
    `
}
        
export default Footer; 