const btn = document.querySelector(".light");
// const body = document.getElementsByTagName("body")[0];
const body = document.body;
const light = document.querySelector(
	'link[href="./styles/dark-light.css"]'
);
const localStorageKey = 'preferred-theme';

// Guardar en el localStorage las preferencias del tema
function toggleTheme() { // Alternar tema según el click realizado
	// getAttribute() Devuelve el valor del atributo especificado en el elemento.
	// Ejemplo: console.log(h2.getAttribute("class")); para ver la clase usada
	// get: obtener
	if (body.getAttribute('data-theme') === 'dark') {
		// setAttribute() Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado.
		// set: colocar
		body.setAttribute('data-theme', 'light');
		// Quitamos el desactivado para que muestre la hoja de estilos
		light.disabled = false;

		/* 
			Ver nota antes de la siguiente función 
		*/
		localStorage.setItem(localStorageKey, 'light')
	} else {
		body.setAttribute('data-theme', 'dark');
		light.disabled = true;
		localStorage.setItem(localStorageKey, 'dark')
	}
}


/* 
La función localStorage.setItem() permite establecer el valor de una clave en el almacenamiento local del navegador, de forma similar a como se establece el valor de una variable en JavaScript. La sintaxis de localStorage.setItem() es la siguiente:

	🔥localStorage.setItem(clave, valor);
Donde clave es una cadena de texto que actúa como identificador de la clave que se desea establecer en el almacenamiento local, y valor es el valor que se desea almacenar en la clave correspondiente.

Luego, para recuperar el valor de una clave del almacenamiento local del navegador, se utiliza la función localStorage.getItem(), que tiene la siguiente sintaxis:

	🔥localStorage.getItem(clave);
Donde clave es la cadena de texto que se utilizó como identificador de la clave que se desea recuperar.

Esta clave valor se puede ver en el inspector de elementos desde Aplication Storage > Local Storage > http://123.0.1.0:1234/
*/


function loadPreferredTheme() { // Cargar / aplicar tema preferido
	// La función localStorage.getItem() obtiene el "valor" de la clave localStorageKey del almacenamiento local del navegador que puede ser light o dark
	const preferredTheme = localStorage.getItem(localStorageKey);

	if (preferredTheme === 'light') {
		body.setAttribute('data-theme', 'light');
		light.disabled = false;
	} else {
		body.setAttribute('data-theme', 'dark');
		light.disabled = true;
	}
}

btn.addEventListener('click', toggleTheme); // Alternar tema
loadPreferredTheme();







// Version sin guardar en localStorage la preferencia del tema
/* btn.addEventListener("click", function () {
	if (body.getAttribute("data-theme") === "dark") {
		body.setAttribute("data-theme", "light");
		light.disabled = false;
	} else {
		body.setAttribute("data-theme", "dark");
		light.disabled = true;
	}
}); */






/* Otro codigo */
/* const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classsList.toggle('active');

	// Guardamos el modo en localstorage.
	if (document.body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
})

// Obtenemos el modo actual. 
if (localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark'),
		btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
} */