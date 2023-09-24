import Header from "../components/header.js";

const renderHeader = (page) => {
   $("#header").html(Header(page));


   let contador = 1;
    
   $('#menu').click(function () {
       $('.header__nav').animate({
           left: contador === 1 ? '0' : '-100%'
       }, function () {
           if (contador === 1) {
               // Cambia el ícono a una cruz
               $('.menu-icon').hide();
               $('.close-icon').show();
           } else {
               // Cambia el ícono a menú
               $('.menu-icon').show();
               $('.close-icon').hide();
           }
           contador = 1 - contador;
       });
   });

}

export default renderHeader;