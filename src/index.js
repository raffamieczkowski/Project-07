import './js/modal-movie';
import { API_KEY } from './js/api-key';
import { getGenres } from './js/genres';
const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const moviesEL = document.querySelector('.movies-list');

async function fetchMovies() {
  await fetch(`${trendingUrl}&api_key=${API_KEY}&page=1`)
    .then(response => {
      return response.json();
    })
    .then(movies => {
      movies.results.forEach(movie => {
        const markup = `<div class="movie__card">
        <a href="#"> <img class="movie__poster" src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" /></a>
        <ul class="movie__short-descr">
          <li class="movie__title">${movie.original_title}</li>
          <li class="movie__genre">${getGenres(movie.id)} | ${movie.release_date.slice(0, 4)}</li>
        </ul>
      </div>`;
        moviesEL.insertAdjacentHTML('beforeend', markup);
      });
    })
    .catch(error => console.error(error));
}
fetchMovies();
