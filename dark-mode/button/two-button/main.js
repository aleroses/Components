function change_mode() {
	const btn = document.querySelector('.button');
	const logo = document.querySelector('.logo');

	btn.classList.toggle('dark-mode');

	btn.classList.contains('dark-mode')
		? logo.src = './svg/sun.svg'
		: logo.src = './svg/moon.svg'
}