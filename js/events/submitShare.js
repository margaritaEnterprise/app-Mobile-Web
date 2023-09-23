import {validateEmail, validateText} from "../utils/validate.js"

const submitShare = () => {
    let form = $("#form__share")
    $(form).keyup((e) => {
        let type = $(e.target).data("type");
        let isValid, textInfo;
        if(type === "email"){
            isValid = validateEmail(e.target.value);
            textInfo = "*Ingrese un mail valido";
        }else if(type === "text"){
            isValid = validateText(e.target.value);
            textInfo = "*Ingrese un nombre valido";
        }
        if(!isValid){
            $(e.target).siblings('p').text(textInfo);
            $(e.target).prop("isValid", false)
            $("#submit__form__button").prop("disabled", true);
            $("#submit__form__button").addClass("disabled");
        }else{
            $(e.target).prop("isValid", true)
            $(e.target).siblings('p').text("");
            validateSubmit();
        }
    })

    $("#form__share").submit(async (e) => { 
        e.preventDefault();
        let emailYou = $("#share__emailYou");
        let name = $("#share__name");
        let message = $("#share__message");
        const urlActual = window.location.href;
        const params = new URLSearchParams(new URL(urlActual).search);
        const code = params.get('code');
        const link = `https://app-mobile-web-sxwq-git-main-margarita.vercel.app/pages/detail.html?code=${code}`
        let body = `Hola ${name.val()}! ${message ? message.val() : ''} ¡Haz click en el siguiente link para ver la información del país! ${encodeURIComponent(link)}`
        let send = `mailto:${emailYou.val()}?subject=Tienes un mensaje de Country Web&body=${body}`
        window.location.href = send;                   
    });
}

function validateSubmit(){
    let emailMe = $("#share__emailMe");
    let emailYou = $("#share__emailYou");
    let name = $("#share__name");
    let message = $("#share__message");

    let isValidMailMe = $(emailMe).prop("isValid");
    let isValidMailYou = $(emailYou).prop("isValid");
    let isValidMailName = $(name).prop("isValid");

    let boo = isValidMailMe && isValidMailYou && isValidMailName
    let button = $("#submit__form__button")
    if(boo) {
        $(button).prop("disabled", false);
        $(button).removeClass("disabled");
    }else{
        $(button).prop("disabled", true);
        $(button).addClass("disabled");
    }
}


export default submitShare;

