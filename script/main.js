// ============================================================================
// Lectura de mensaje personalizado desde los parámetros de la URL
// ============================================================================

/**
 * Obtiene el mensaje personalizado de los parámetros de la URL y lo muestra en el elemento principal.
 */
function cargarMensajePersonalizado() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const mensajePersonalizado = urlSearchParams.get("message");

  if (mensajePersonalizado) {
      const elementoMensajePrincipal = document.querySelector("#mainMessage");
      elementoMensajePrincipal.textContent = decodeURI(mensajePersonalizado);
  }
}

// ============================================================================
// Inicialización de elementos y estados
// ============================================================================

const btnAbrir = document.querySelector("#open");
const btnCerrar = document.querySelector("#close");
const elementoCover = document.querySelector(".cover");
const elementoPaper = document.querySelector(".paper");
const elementoCorazon = document.querySelector(".heart");

// Estado inicial de los botones
btnCerrar.disabled = true;

// ============================================================================
// Funciones de manejo de eventos
// ============================================================================

/**
* Maneja la apertura de la carta.
*/
function abrirCarta() {
  btnAbrir.disabled = true;
  btnCerrar.disabled = false;
  elementoCover.classList.add("open-cover");

  setTimeout(() => {
      elementoCover.style.zIndex = -1;
      elementoPaper.classList.remove("close-paper");
      elementoPaper.classList.add("open-paper");
      animarCorazon(true);
  }, 500);
}

/**
* Maneja el cierre de la carta.
*/
function cerrarCarta() {
  btnAbrir.disabled = false;
  btnCerrar.disabled = true;
  elementoPaper.classList.remove("open-paper");
  elementoPaper.classList.add("close-paper");

  setTimeout(() => {
      elementoCover.style.zIndex = 0;
      elementoCover.classList.remove("open-cover");
      animarCorazon(false);
  }, 500);
}

/**
* Muestra u oculta la animación del corazón.
* @param {boolean} mostrar - Indica si se debe mostrar (true) u ocultar (false) el corazón.
*/
function animarCorazon(mostrar) {
  elementoCorazon.style.display = mostrar ? "block" : "none";
}

// ============================================================================
// Asignación de eventos
// ============================================================================

btnAbrir.addEventListener("click", abrirCarta);
btnCerrar.addEventListener("click", cerrarCarta);

// ============================================================================
// Ejecución inicial
// ============================================================================

cargarMensajePersonalizado();
