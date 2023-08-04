// Obtener el botón
const colorModeBtn = document.getElementById("color-mode-btn");

// Agregar un controlador de eventos para el clic en el botón
colorModeBtn.addEventListener("click", function () {
	// Obtener el elemento body
	const body = document.body;
	// Alternar la clase "dark-mode" en el elemento body
	body.classList.toggle("dark-mode");
});