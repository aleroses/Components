document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  fetch("./content/header.html")
    .then((response) => response.text())
    .then((html) => (header.innerHTML = html));
});

/* Segundo método 👈👀 ----------------------- */
/* document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  // Crea un elemento <object>
  var objectElement = document.createElement("object");

  // Establece el atributo data con la URL de contenido.html
  objectElement.setAttribute("data", "./content/header.html");

  // Agrega el elemento <object> al div
  header.appendChild(objectElement);
}); */

/* Tercer método 👈👀 ----------------------- */
/* document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el div donde se insertará el contenido
  var header = document.querySelector(".header");

  // Realiza una solicitud AJAX para obtener el contenido de contenido.html
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./content/header.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Inserta el contenido en el div utilizando innerHTML
      header.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}); */
