import * as basicLightbox from 'basiclightbox';
import { API_KEY } from './api-key';
import 'basiclightbox/dist/basicLightbox.min.css';

const closeModalHandler = e => {
  if (e.code === 'Escape') {
    modal.close();
  }
  window.removeEventListener('keydown', closeModalHandler);
};

document.addEventListener('click', async e => {
  if (e.target.classList.contains('modal-movie__btn-trailer')) {
    const movieId = e.target.dataset.id;
    await openTrailer(movieId);
  }
});

const openTrailer = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
  );
  const data = await response.json();
  const youtubeKey = data.videos.results[0].key;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;

  const trailerLightbox = basicLightbox.create(`
    <iframe width="750" height="475" src="https://www.youtube.com/embed/${youtubeKey}" frameborder="0" allowfullscreen></iframe>
  `);

  trailerLightbox.show();

  window.addEventListener('keydown', closeModalHandler);
};
