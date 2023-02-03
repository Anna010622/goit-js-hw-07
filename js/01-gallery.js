import { galleryItems } from './gallery-items.js';

function createItems(array) {
	return array
		.map(
			({ original, preview, description }) =>
				`
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `
		)
		.join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createItems(galleryItems);
gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
	if (event.target.hasAttribute('data-source')) {
		event.preventDefault();

		const img = basicLightbox.create(
			`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">
    `,
			{
				onShow: () => {
					window.addEventListener('keydown', onEscKeyPress);
				},
				onClose: () => {
					window.removeEventListener('keydown', onEscKeyPress);
				},
			}
		);

		img.show();

		function onEscKeyPress(event) {
			if (event.code === 'Escape') {
				img.close();
			}
		}
	}
}
