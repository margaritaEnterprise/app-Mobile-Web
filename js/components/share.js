const Share = (country) => {
    console.log(country);
    let name = country.translations.spa.common;
    let flag = country.flags.png;

    return `
    <section class="share-header">
        <article class="country__flag">
            <img class="country__img" src="${flag}" alt=${name}>
        </article>
        <h1 class="" >${name}</h1>

    </section>
    <form class="email-form__form">
        <div class="email-form__field">
            <label for="email" class="email-form__label">Email:</label>
            <input type="text" id="email" class="email-form__input" placeholder="Ingrese su email . . ."/>
        </div>
        <div class="email-form__field">
            <label for="recipient-name" class="email-form__label">Nombre del destinatario:</label>
            <input type="text" id="recipient-name" class="email-form__input" placeholder="Nombre del destinatario . . ."/>
        </div>
        <div class="email-form__field">
            <label for="recipient-email" class="email-form__label">Correo del destinatario:</label>
            <input type="text" id="recipient-email" class="email-form__input" placeholder="Correo del destinatario . . ."/>
        </div>
        <div class="email-form__field">
            <label for="message" class="email-form__label">Mensaje (opcional):</label>
            <textarea id="message" class="email-form__textarea" placeholder="Mensaje"></textarea>
        </div>
        <div class="email-form__field">
            <button type="submit" class="email-form__submit">Compartir</button>
        </div>
    </form>
    `;
};

export default Share;
