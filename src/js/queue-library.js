import { getPosterLink } from './poster';
import { openModal } from './modal-movie';

const buttons = document.querySelector('.header-library__buttons-list');
const resultContainer = document.querySelector('.result__container');

buttons.addEventListener('click', e => {
  if (e.target.classList.contains('header-library__buttons-item')) {
    if (e.target.textContent === 'WATCHED') {
      hideItem(resultContainer);
    }
    if (e.target.textContent === 'QUEUE') {
      showItem(resultContainer);
    }
  }
});

function hideItem(item) {
  item.classList.add('is-hidden');
}

function showItem(item) {
  item.classList.remove('is-hidden');
}

function displayQueue() {
  const queuedMovies = localStorage.getItem('queueList');
  if (queuedMovies) {
    const movieList = JSON.parse(queuedMovies);
    movieList.forEach(movie => {
      const movieCard = `<div class="movie__card">
        <a href="#"><img class="movie__poster" src='${getPosterLink(movie)}'></a>
        <ul class="movie__short-descr">
          <li class="movie__title">${movie.title}</li>
          <li class="movie__genre movie__genre--list">${movie.genres} | ${movie.release_date.slice(
        0,
        4,
      )} <span class="movie__vote">${movie.vote_average.toFixed(1)}</span></li>
      
        </ul>
      </div>`;

      resultContainer.insertAdjacentHTML('beforeend', movieCard);
    });
  } else {
    console.log('Brak filmów w kolejce.');
  }
}

displayQueue();
