// Función para abrir las modales
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Función para cerrar las modales
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar la modal si se hace clic fuera de ella
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};
