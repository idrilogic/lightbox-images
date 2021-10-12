let images = document.querySelectorAll('img');
let lightbox = document.querySelector('.lightbox');

images.forEach(image => {
	image.addEventListener('click', event => {
		lightbox.classList.add('active');

		let img = document.createElement('img');
		img.className = 'addedImage';
		img.src = image.src

		while(lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}

		lightbox.appendChild(img);


		let close = document.createElement('span');
		let text = document.createTextNode('\u00D7');
		close.className = 'close';

		close.appendChild(text)
		lightbox.appendChild(close);


		close.onclick = () => {
			lightbox.classList.remove('active');
		}

	});
});



/*
lightbox.addEventListener('click', event => {
	if (event.target !== event.currentTarget) return

	lightbox.classList.remove('active');
})

*/