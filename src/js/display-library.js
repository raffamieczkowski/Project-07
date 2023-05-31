import { getPosterLink } from './poster';
import { openModal } from './modal-movie';

const buttons = document.querySelector('.header-library__buttons-list');
const resultContainer = document.querySelector('.result__container');

// Tworzenie elementu result__container--watched
const resultContainerWatched = document.createElement('div');
resultContainerWatched.classList.add('result__container--watched');
resultContainer.parentNode.insertBefore(resultContainerWatched, resultContainer.nextSibling);

buttons.addEventListener('click', e => {
  if (e.target.classList.contains('header-library__buttons-item')) {
    if (e.target.textContent === 'WATCHED') {
      hideItem(resultContainer);
      showItem(resultContainerWatched);
      displayWatched();
    }
    if (e.target.textContent === 'QUEUE') {
      hideItem(resultContainerWatched);
      showItem(resultContainer);
      displayQueue();
    }
  }
});

function hideItem(item) {
  item.style.display = 'none';
}

function showItem(item) {
  item.style.display = '';
}

function displayQueue() {
  resultContainer.innerHTML = ''; // Usunięcie istniejących elementów
  const queuedMovies = localStorage.getItem('queueList');
  if (queuedMovies) {
    const movieList = JSON.parse(queuedMovies);
    movieList.forEach(movie => {
      const movieCard = createMovieCard(movie);
      resultContainer.insertAdjacentHTML('beforeend', movieCard);
    });
  } else {
    console.log('Brak filmów w kolejce.');
  }
}

function displayWatched() {
  resultContainerWatched.innerHTML = ''; // Usunięcie istniejących elementów
  const watchedMovies = localStorage.getItem('watchedList');
  if (watchedMovies) {
    const movieList = JSON.parse(watchedMovies);
    movieList.forEach(movie => {
      const movieCard = createMovieCard(movie);
      resultContainerWatched.insertAdjacentHTML('beforeend', movieCard);
    });
  } else {
    console.log('Brak obejrzanych filmów.');
  }
}

function createMovieCard(movie) {
  const movieCard = `
    <div class="movie__card">
      <a href="#"><img class="movie__poster" src="${getPosterLink(movie)}"></a>
      <ul class="movie__short-descr">
        <li class="movie__title">${movie.title}</li>
        <li class="movie__genre movie__genre--list">${movie.genres} | ${movie.release_date.slice(
    0,
    4
  )} <span class="movie__vote">${movie.vote_average.toFixed(1)}</span></li>
      </ul>
    </div>
  `;

  return movieCard;
}

displayQueue();
