
const Footer = () => {

    return  `
    <div class="footer__body">
    <div class="footer__hour">
        <h3 class="footer__title">Horarios de atención:</h3>
        <ul class="footer__list">
            <li class="footer__item">Lunes: Cerrado</li>
            <li class="footer__item">Martes: 18:00 a 23:00 h.</li>
            <li class="footer__item">Miércoles: 18:00 a 23:00 h.</li>
            <li class="footer__item">Jueves: 18:00 a 23:00 h.</li>
            <li class="footer__item">Viernes: 18:00 a 23:00 h.</li>
            <li class="footer__item">Sábado: 18:00 a 23:00 h.</li>
            <li class="footer__item">Domingo: 18:00 a 23:00 h.</li>
        </ul>
    </div>
    <div class="footer__contact">
        <h3 class="footer__title">Dónde estamos?</h3>
        <p class="footer__text">Dirección: Calle 123, Florencio Varela</p>
        <h3 class="footer__title">Contáctanos:</h3>
        <p class="footer__text">WhatsApp: (11) 2345 6789</p>
        <a href="mailto:mail@casadecomida.com" class="footer__link">Enviar correo</a>
    </div>
    <div class="footer__icons">
        <h3 class="footer__title">Síguenos:</h3>
        <a href="https://www.facebook.com/paulinacocina.net/?locale=es_LA" title="Ver promociones y recetas" class="footer__icon"><i class="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/recetasargentinas/" title="Ver promociones y recetas" class="footer__icon"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/paulina_cocina?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Ver promociones y recetas" class="footer__icon"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/fichinbar/?hl=es" title="Ver promociones y recetas" class="footer__icon"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/@paulinacocina" title="Ver promociones y recetas" class="footer__icon"><i class="fab fa-youtube"></i></a>
    </div>
</div>
<div class="footer__footer">
    <a href='#' id="footer__up" class="footer__link"><i class="material-icons" title="Inicio">keyboard_double_arrow_up</i></a>
    <p class="footer__text">Aplicaciones Móviles 2C 2023&copy;</p>
</div>
    `
}
        
export default Footer; 