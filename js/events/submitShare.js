import {validateEmail, validateText} from "../utils/validate.js"

const submitShare = () => {
    $("#share__emailMe").keyup((e) => { 
        let boo = validateEmail(e.target.value)
        console.log(boo)
        console.log(e.target.value +" -> "+boo )
        if(boo){
            $("#info__emailMe").hide();
        } else {
            $("#info__emailMe").show();
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