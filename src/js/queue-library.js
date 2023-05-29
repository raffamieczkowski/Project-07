import { getPosterLink } from './poster';

function displayQueue() {
  const resultContainer = document.querySelector('.result__container');
  const queuedMovies = localStorage.getItem('movieList');
  if (queuedMovies) {
    const movieList = JSON.parse(queuedMovies);

    movieList.forEach(movie => {
      const movieCard = `<div class="movie__card">
        <a href="#"><img class="movie__poster" src='${getPosterLink(movie)}'></a>
        <ul class="movie__short-descr">
          <li class="movie__title">${movie.title}</li>
          <li class="movie__genre">${movie.genres} | ${movie.date}</li>
        </ul>
      </div>`;

      console.log(movieCard);
      resultContainer.insertAdjacentHTML('beforeend', movieCard);
    });
  } else {
    console.log('Brak filmów w kolejce.');
  }
}

displayQueue();
