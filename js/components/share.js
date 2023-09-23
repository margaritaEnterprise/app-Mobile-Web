const Share = () => {

    return `
    <form id="form__share">
        <div>
            <label for="email" class="email-form__label">Email:</label>
            <input 
                data-type="email"
                type="text" 
                id="share__emailMe" 
                class="email-form__input" 
                placeholder="Ingrese su email . . ."
            />
            <p class="info-text" id="info__emailMe" ></p>
        </div>
        <div>
            <label for="share__name" class="email-form__label">Nombre del destinatario:</label>
            <input 
                data-type="text" 
                type="text" 
                id="share__name" 
                class="email-form__input" 
                placeholder="Nombre del destinatario . . ."
            />
            <p class="info-text" id="info__name" ></p>

        </div>
        <div>
            <label for="share__email" class="email-form__label">Correo del destinatario:</label>
            <input
                data-type="email" 
                type="text" 
                id="share__emailYou" 
                class="email-form__input" 
                placeholder="Correo del destinatario . . ."
            />
            <p class="info-text" id="info__emailYou" ></p>
        </div>
        <div>
            <label for="message" class="email-form__label">Mensaje (opcional):</label>
            <textarea
                data-type="text" 
                id="share__message" 
                class="email-form__textarea" 
                placeholder="Mensaje"></textarea>
        </div>
        <div class="email-form__field">
            <button id="submit__form__button" type="submit" class="email-form__submit disabled" disabled>Compartir</button>
        </div>
    </form>
    `;
};


export default Share;
