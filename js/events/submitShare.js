import {validateEmail, validateText} from "../utils/validate.js"
import { getCountriesByCodes } from "../services/countries.js";

const showInfo = (formSection, infoSection, validate) => {
    return new Promise((resolve) => {
        $(formSection).keyup((e) => {
            let boo = validate(e.target.value);
            if (boo) {
                $(formSection).prop("isValid", true);
                $(infoSection).hide();
            } else {
                $(formSection).prop("isValid", false);
                $(infoSection).show();
            }
            resolve(); // Resuelve la promesa cuando se complete la validación
        });
    });
}

const submitShare = () => {
    let emailMe = $("#share__emailMe");
    let infoEmailMe = $("#info__emailMe");
    let emailYou = $("#share__emailYou");
    let infoEmailYou = $("#info__emailYou");
    let name = $("#share__name");
    let infoName = $("#info__name");
    let message = $("#share__message");

    Promise.all([
        showInfo(emailMe, infoEmailMe, validateEmail),
        showInfo(emailYou, infoEmailYou, validateEmail),
        showInfo(name, infoName, validateText)
    ]).then(() => {

            let isValidMailMe = $(emailMe).prop("isValid");
            let isValidMailYou = $(emailYou).prop("isValid");
            let isValidMailName = $(name).prop("isValid");

            let boo = isValidMailMe && isValidMailYou && isValidMailName

            if(boo) {
                let button = $("#submit__form__button")
                $(button).prop("disabled", false);
                $(button).click(async (e) => { 
                    e.preventDefault();

                    
                    const urlActual = window.location.href;
                    const params = new URLSearchParams(new URL(urlActual).search);
                    const code = params.get('code');
                    let country = await getCountriesByCodes([code]);
                    const link = `https://app-mobile-web-sxwq.vercel.app/pages/detail.html?code=${code}`
                    /*const html = `<div>
                                        <img src="${country[0].flags.png}" alt="Bandera de ${country[0].flags.alt}"/>
                                        <h2>${country[0].translations.spa.common}</h2>
                                        <p>Continente: ${country[0].region}</p>
                                    </div>`*/
                    let body = `Hola ${name.val()}! 
                        ${message ? message.val() : ''}
                        Haz click en el siguiente link para ver la información del país 
                        ${encodeURIComponent(link)}`
                    let send = `mailto:${emailYou.val()}?subject=Tienes un mensaje de Country Web&body=${body}`
                    window.location.href = send;                   
                });
            }
        })

}

export default submitShare;

