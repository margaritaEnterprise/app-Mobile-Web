const Share = () => {

    return `
    <form id="form__share">
        <div>
            <label for="email" class="email-form__label">Email:</label>
            <input 
                type="text" 
                id="share__emailMe" 
                class="email-form__input" 
                placeholder="Ingrese su email . . ."/>
        </div>
        <div>
            <label for="share__name" class="email-form__label">Nombre del destinatario:</label>
            <input 
                type="text" 
                id="share__name" 
                class="email-form__input" 
                placeholder="Nombre del destinatario . . ."
                minlength="1" 
                maxlength="50" />
        </div>
        <div>
            <label for="share__email" class="email-form__label">Correo del destinatario:</label>
            <input 
                type="text" 
                id="share__email" 
                class="email-form__input" 
                placeholder="Correo del destinatario . . ."/>
        </div>
        <div>
            <label for="message" class="email-form__label">Mensaje (opcional):</label>
            <textarea id="message" class="email-form__textarea" placeholder="Mensaje"></textarea>
        </div>
        <div class="email-form__field">
            <button id="submit__form__button" type="submit" class="email-form__submit">Compartir</button>
        </div>
    </form>
    `;
};

//const submitShare = (code) =>{//onclick="submit('${code}')" 
    //validar 
//}window.submitShare = submitShare;

export default Share;
