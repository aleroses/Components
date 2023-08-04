/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
/* const button = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');

button.addEventListener('click', () => {
	nav.classList.toggle('activo')
}) */

const button = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');
const close = document.querySelector('.menu')

button.addEventListener('click', () => {
	nav.classList.toggle('active');
	button.classList.toggle('rotate')

	nav.classList.contains('active')
		? close.src = './svg/close.svg'
		: close.src = './svg/menu.svg'
});
