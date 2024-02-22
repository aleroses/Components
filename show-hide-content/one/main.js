function mostrarContenido() {
  document.getElementById(
    "mostrar-btn"
  ).style.display = "none";
  
	document.getElementById(
    "contenido"
  ).style.display = "block";
  
	document.getElementById(
    "ocultar-btn"
  ).style.display = "block";
}

function ocultarContenido() {
  document.getElementById(
    "mostrar-btn"
  ).style.display = "block";
  document.getElementById(
    "contenido"
  ).style.display = "none";
  document.getElementById(
    "ocultar-btn"
  ).style.display = "none";
}
