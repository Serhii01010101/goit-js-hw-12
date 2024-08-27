import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getData } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import { form, input, gallery, guard } from './js/refs.js';
import { loaderShow } from './js/loader.js';
import { scrollScreen } from './js/scroll-screen';

let searchQuery = '';

const photosGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let totalPages;

const observerOptions = {
  rootMargin: '300px',
};
const observer = new IntersectionObserver(observerHandle, observerOptions);

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  page = 1;

  if (input.value.trim() === '') {
    return iziToast.error({
      title: '',
      message: 'The field can not be empty!!!',
      position: 'topCenter',
      timeout: 3000,
      pauseOnHover: false,
    });
  }

  searchQuery = input.value;
  loaderShow();

  try {
    const data = await getData(searchQuery, page);
    if (data.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        pauseOnHover: false,
      });
    } else {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      photosGallery.refresh();

      totalPages = data.totalHits / data.hits.length;

      if (page < totalPages) {
        observer.observe(guard);
      }
    }
  } catch (error) {
    alert(error.message);
  } finally {
    form.reset();
  }
  loaderShow();
}

async function observerHandle(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      page += 1;

      try {
        const data = await getData(searchQuery, page);
        gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

        photosGallery.refresh();

        if (page >= totalPages && data.totalHits) {
          loaderShow();
          observer.unobserve(guard);
          iziToast.info({
            title: '',
            message:
              "We're sorry, but you've reached the end of search results!",
            position: 'bottomRight',
            timeout: 3000,
            pauseOnHover: false,
          });
        }
        loaderShow();
      } catch (error) {
        alert(error.message);
      } finally {
        if (page >= totalPages) {
          loaderShow();
        }
      }
    }
  }
}
