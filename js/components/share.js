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
                <p id="info__emailMe" style="color: red">*Ingrese un mail valido</p>
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
                <p id="info__name" style="color: red">*Ingrese un nombre valido</p>

        </div>
        <div>
            <label for="share__email" class="email-form__label">Correo del destinatario:</label>
            <input 
                type="text" 
                id="share__emailYou" 
                class="email-form__input" 
                placeholder="Correo del destinatario . . ."/>
                <p id="info__emailYou" style="color: red">*Ingrese un mail valido</p>
        </div>
        <div>
            <label for="message" class="email-form__label">Mensaje (opcional):</label>
            <textarea 
                id="share__message" 
                class="email-form__textarea" 
                placeholder="Mensaje"></textarea>
        </div>
        <div class="email-form__field">
            <button id="submit__form__button" type="submit" class="email-form__submit" disabled>Compartir</button>
        </div>
    </form>
    `;
};


export default Share;
