const Share = () => {

    return `
        <div>
            <form>
                <div>
                    <input placeholder="Ingrese su email . . ."/>
                </div>
                <div>
                    <input placeholder="Nombre del destinatario . . ."/>
                </div>
                <div>
                    <input placeholder="Correo del destinatario . . ."/>
                </div>
                <div>
                    <textarea placeholder="Mensaje (opcional)"></textarea>
                </div>
                <div>
                    <button type="submit">Compartir</button>
                </div>
            </form>
        </div>
    `;
};

export default Share;
