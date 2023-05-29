import { API_KEY } from './api-key';
import { createPagination, setCurrentPage } from './pagination';
import { trendingMovies } from './movies';
import { getPosterLink } from './poster';

import { openModal } from './modal-movie';
import { getPosterLink } from './poster';

const resultContainer = document.querySelector('.result__container');
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.header__form');
  const input = document.querySelector('.form__input');

  const searchButton = document.querySelector('.form__button');

  form.addEventListener('submit', handleFormSubmit);
  searchButton.addEventListener('click', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    const searchTerm = input.value.trim();
    if (searchTerm !== '') {
      searchMovies(searchTerm);
    } else {
      resultContainer.innerHTML = '';
      setCurrentPage(1);
      trendingMovies();
    }
  }
});

async function searchMovies(searchTerm) {
  const apiKey = API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    searchTerm,
  )}`;
  setCurrentPage(1);
  (async () => {
    createPagination(url);
  })();
}

function displayMovies(results) {
  resultContainer.innerHTML = '';

  results.forEach(movie => {
    const movieCard = createMovieCard(movie);
    resultContainer.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie__card');

  const movieLink = document.createElement('a');
  movieLink.href = '#';

  const moviePoster = document.createElement('img');
  moviePoster.classList.add('movie__poster');
  moviePoster.src = `${getPosterLink(movie)}`;
  movieLink.appendChild(moviePoster);

  const movieShortDescr = document.createElement('ul');
  movieShortDescr.classList.add('movie__short-descr');

  const movieTitle = document.createElement('li');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = movie.original_title;
  movieShortDescr.appendChild(movieTitle);

  const movieGenre = document.createElement('li');
  movieGenre.classList.add('movie__genre');
  movieGenre.textContent = `${movie.genres} | ${movie.release_date.slice(0, 4)}`;
  movieShortDescr.appendChild(movieGenre);

  movieCard.appendChild(movieLink);
  movieCard.appendChild(movieShortDescr);

  moviePoster.addEventListener('click', e => {
    e.preventDefault();
    const backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('is-hidden');
    openModal(movie);
  });

  return movieCard;
}

export { displayMovies };
