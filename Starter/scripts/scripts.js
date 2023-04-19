document
	.querySelector('.menu-btn')
	.addEventListener('click', () =>
		document.querySelector('.main-menu').classList.toggle('show')
	);

const date = document.querySelector('.copy');

date.innerText = 'Copyright' + new Date().getFullYear();
