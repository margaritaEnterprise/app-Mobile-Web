import {validateEmail, validateText} from "../utils/validate.js"

const submitShare = () => {
    $("#share__emailMe").keyup((e) => { 
        let boo = validateEmail(e.value)
        console.log(boo)
        console.log(e.target.value +" -> "+boo )
        if(boo){
            //$("#info__share__mailMe").text("Ingrese un mail valido");
            $("#info__emailMe").show();
        } else {
            $("#info__emailMe").hide();
        }

    });
    $("#share__name").keyup((e) => { 
        let boo = validateText(e.target.value)
        console.log(e.target.value +" -> "+boo )
        if(!boo){
            $("#info__name").show();
        } else {
            $("#info__name").hide();
        }
    });
    $("#share__emailYou").keyup((e) => { 
        let boo = validateEmail(e.value)
        console.log(e.target.value +" -> "+boo )
    });
    $("#share__message").keyup((e) => { 
        let boo = validateText(e.target.value)
        console.log(e.target.value +" -> "+boo )
    });
    
}

export default submitShare;