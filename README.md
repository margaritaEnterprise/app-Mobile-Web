# 🌍 App-mobile-web: Banderas del Mundo

## Descripción 

El objetivo de este proyecto es desarrollar una **aplicación web responsiva** optimizada para ser accedida y ejecutada mediante cualquier tipo de dispositivo móvil 📱. La aplicación permite visualizar información sobre las banderas de los países del mundo utilizando datos obtenidos a través de una API pública.

## 🌐 Tecnologías y API utilizadas

### API
La aplicación consume datos a través de la siguiente API:
- **API:** [RestCountries](https://restcountries.com/)
  - Endpoint utilizado para obtener información de países por su código alfa (CCA3):
    ```text
    https://restcountries.com/v3.1/alpha?codes=DZA,MLI,SEN,ESH
    ```
  - Ejemplo de respuesta:  
    ```json
    {
      "DZA": {
        "name": "Algeria",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
        "capital": "Algiers",
        "region": "Africa",
        "population": 40400000,
        ...
      }
      ...
    }
    ```

### ✅ Requerimientos Funcionales

1. **🔍 Búsqueda y Filtros (3):**
   - Los usuarios pueden realizar búsquedas por país y aplicar filtros para refinar los resultados.

2. **📑 Mostrar 10 Primeros Resultados:**
   - La aplicación debe mostrar los primeros 10 resultados y permitir al usuario acceder al resto de la información si es necesario.

3. **📝 Información Principal:**
   - Cada resultado debe mostrar información principal como el nombre del país, la bandera, la capital, la región y la población.

4. **⭐ Favoritos y Compartir:**
   - Los usuarios pueden agregar países a sus favoritos. También pueden compartir la información con un amigo, lo que abrirá un formulario para enviar los datos por correo electrónico.

5. **🕒 Historial de Productos:**
   - Los usuarios pueden ver un historial de los países que han visualizado en un formato similar al de la búsqueda.

6. **📍 Página de Contacto:**
   - Una página de contacto con los datos básicos del desarrollador y un mapa de la ubicación de la oficina (Catedral La Plata).

7. **💻 Versión Web:**
   - La aplicación debe ser funcional en versiones de escritorio, tablet y móvil. En la versión de escritorio, se debe mostrar una sección publicitaria que no aparecerá en la versión móvil.

### 🛠 Funcionalidades Adicionales

- **✅ Validación de Datos:** Los formularios deben ser validados antes de ser enviados.
- **🌍 Geolocalización:** La ubicación del usuario será utilizada para mostrar datos relevantes de su región.
- **💾 LocalStorage:** La aplicación utilizará LocalStorage para guardar los favoritos del usuario.

## 🚀 Navegación del Sitio

La aplicación contará con las siguientes pantallas y características de navegación:

1. **🏠 Pantalla Principal (Búsqueda y Resultados):**
   - Los usuarios pueden realizar una búsqueda de países.
   - Se muestran los primeros 10 resultados y un enlace para cargar más.

2. **📋 Página de Detalle:**
   - Al hacer clic en un país, se muestra la información detallada (bandera, capital, población, etc.).
   - Los usuarios pueden agregar a favoritos y compartir.

3. **📧 Formulario de Compartir:**
   - Los usuarios pueden compartir la información de un país a través de correo electrónico.
   - Formulario con los campos: datos del país (autocompletados), correo emisor, correo destino y mensaje.

4. **🕒 Historial de Productos:**
   - Página donde se muestra el historial de países que el usuario ha visitado.

5. **📞 Página de Contacto:**
   - Información del desarrollador y ubicación en un mapa.

6. **📱 Versión Mobile:**
   - La interfaz será optimizada para dispositivos móviles.

## 🛠 Uso de Herramientas

- **💾 LocalStorage:**
  - Se utilizará para almacenar los países favoritos del usuario, lo que permitirá que los favoritos se mantengan incluso al recargar la página.

- **📧 Envío de Mail:**
  - Se utilizará un formulario para enviar los datos por correo electrónico. El formulario se completará automáticamente con la información del país seleccionado.

- **🌍 Geolocalización:**
  - Se utilizará para determinar la ubicación del usuario y personalizar la experiencia de acuerdo con su región.

## 📂 Estructura del Proyecto

- `index.html`: Página principal de la aplicación.
- `app.js`: Lógica de la aplicación, incluyendo llamadas a la API.
- `styles.css`: Estilos CSS para la interfaz.
- `contact.html`: Página de contacto.
- `history.html`: Página de historial de productos.
- `favorites.html`: Página de favoritos.

## 📋 Requisitos del Proyecto

- **Responsive Design:** La aplicación debe ser completamente responsiva y funcionar en cualquier dispositivo móvil, tablet o escritorio.
- **Accesibilidad:** La aplicación debe ser accesible, considerando la usabilidad y la experiencia del usuario.

---
