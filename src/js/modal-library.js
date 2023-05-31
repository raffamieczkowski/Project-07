import { getPosterLink } from './poster';
import { openModal } from './modal-movie';

function createModal(movie) {
  const modalMovieEl = document.querySelector('.modal-movie');
  const backdrop = document.querySelector('.backdrop');

  const markup = `
    <div class="modal-movie__poster-box">
      <img class="modal-movie__poster" src=${getPosterLink(movie)} alt="${movie.original_title}" />
    </div>
    <button class="modal-movie__btn-close">&times;</button>

    <div class="modal-movie__info">
      <h2 class="modal-movie__title">${movie.title}</h2>

      <ul class="modal-movie__list">
        <li class="modal-movie__item modal-movie__item--label">vote / votes</li>
        <li class="modal-movie__item modal-movie__item--value">
          <span class="modal-movie__vote">${movie.vote_average.toFixed(
            1,
          )}</span> <span>/ </span><span>${movie.vote_count}</span>
        </li>
        <li class="modal-movie__item modal-movie__item--label">popularity</li>
        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__popularity">${movie.popularity.toFixed(
          1,
        )}</span></li>
        <li class="modal-movie__item modal-movie__item--label">original title</li>
        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__original-title">${
          movie.original_title
        }</span></li>
        <li class="modal-movie__item modal-movie__item--label">genre</li>
        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__genre">${
          movie.genres
        }</span></li>
      </ul>

      <div class="modal-movie__description">
        <h3 class="modal-movie__about">about</h3>
        <p class="modal-movie__text">${movie.overview}</p>
      </div>

      <div class="modal-movie__btns">
        <div class="modal-movie__box">
          <button class="modal-movie__btn-watched">add to watched</button>
          <button class="modal-movie__btn-queue" data-movie-id="${
            movie.id
          }">remove from queue</button>
        </div>
        <button class="modal-movie__btn-close modal-movie__btn-close--mobile">&times;</button>
      </div>
    </div>
  `;

  modalMovieEl.innerHTML = markup;
  modalMovieEl.classList.add('is-visible');
  backdrop.classList.remove('is-hidden');

  const btnClose = document.querySelector('.modal-movie__btn-close');
  const btnCloseMobile = document.querySelector('.modal-movie__btn-close--mobile');
  btnClose.addEventListener('click', closeModal);
  btnCloseMobile.addEventListener('click', closeModal);
}

function closeModal() {
  const modalMovieEl = document.querySelector('.modal-movie');
  const backdrop = document.querySelector('.backdrop');

  modalMovieEl.innerHTML = '';
  modalMovieEl.classList.remove('is-visible');
  backdrop.classList.add('is-hidden');
}

function displayQueue() {
  const queuedMovies = localStorage.getItem('queueList');
  const queueMoviesContainer = document.querySelector('.queue__movies');

  if (queuedMovies) {
    const movieList = JSON.parse(queuedMovies);
    movieList.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie__card');

      const movieLink = document.createElement('a');
      movieLink.href = '#';

      const moviePoster = document.createElement('img');
      moviePoster.classList.add('movie__poster');
      moviePoster.src = getPosterLink(movie);

      movieLink.appendChild(moviePoster);
      movieCard.appendChild(movieLink);

      const movieDescr = document.createElement('ul');
      movieDescr.classList.add('movie__short-descr');

      const movieTitle = document.createElement('li');
      movieTitle.classList.add('movie__title');
      movieTitle.textContent = movie.title;

      const movieGenre = document.createElement('li');
      movieGenre.classList.add('movie__genre');
      movieGenre.textContent = `${movie.genres} | ${movie.release_date.slice(0, 4)}`;

      movieDescr.appendChild(movieTitle);
      movieDescr.appendChild(movieGenre);
      movieCard.appendChild(movieDescr);

      queueMoviesContainer.appendChild(movieCard);

      movieCard.addEventListener('click', () => {
        createModal(movie);
      });
    });
  } else {
    console.log('Brak filmów w kolejce.');
  }
}

displayQueue();
