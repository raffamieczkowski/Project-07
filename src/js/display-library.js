import { getPosterLink } from './poster';
import { openModal } from './modal-library';

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
      resultContainer.appendChild(movieCard);
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
      resultContainerWatched.appendChild(movieCard);
    });
  } else {
    console.log('Brak obejrzanych filmów.');
  }
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

displayQueue();
