import { galleryItems } from './gallery-items.js';

function createItems(array) {
	return array
		.map(
			({ original, preview, description }) =>
				`
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `
		)
		.join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createItems(galleryItems);
let galleryNew = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
	alertError: false,
});

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
	if (event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
}

/*Cursor*/
const cursor = document.querySelector('.cursor');

addEventListener('click', event => {
	cursor.classList.add('press');
	cursor.style.top = `${event.pageY - 10}px`;
	cursor.style.left = `${event.pageX - 10}px`;
	setTimeout(() => {
		cursor.classList.remove('press');
	}, 500);
});
