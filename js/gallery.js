import images from '../gallery-items.js';
// console.log(images);
const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".lightbox__image"),
  closeOverlay: document.querySelector('.lightbox__overlay'),
};
// console.log(refs);
const galleryAll = createGalleryItem(images);
refs.gallery.insertAdjacentHTML('afterbegin', galleryAll);

function createGalleryItem(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
          <a
            class="gallery__link"
            href="${original}"
          >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
        })
        .join('');
}
refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  // console.log(evt.target.tagName);
  if (evt.target.tagName !== 'IMG') {
      return;
  }
  
   if (evt.target.tagName  === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightbox__image.src = evt.target.dataset.source;
    refs.lightbox__image.alt = evt.target.alt;
  }
  window.addEventListener("keydown", onEscPress);
  window.addEventListener("keydown", changeArrowImg);
}

refs.btn.addEventListener("click", onCloseButton);
refs.modal.addEventListener("click", closeModal);
refs.closeOverlay.addEventListener('click', onCloseButton);

function onCloseButton(evt) {

  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
  window.removeEventListener("keydown", onEscPress);
  window.removeEventListener("keydown", changeArrowImg);
}

function closeModal(evt) {
  if (evt.target === evt.currentTarget) {
    onCloseButton();
  }
}

function onEscPress(evt) {
  // console.log(evt.code);
  if (evt.code === "Escape") {
    onCloseButton();
  } 
  
}

function changeArrowImg(evt) {
  console.log(evt.code);
  const ArrowRight = e.code === "ArrowRight";
  const ArrowLeft = e.code === "ArrowLeft";
  let currentImg = refs.lightbox__image.src;
  images.forEach((evt, index, array) => {
    const nextEvt = array[index + 1];
    
  })
}



