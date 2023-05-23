import './js/example';
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
        const markup = `<div class="movie-card">
        <a href="#"> <img class="movie-poster" src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" /></a>
        <ul class="movie-short-descr">
          <li class="movie-title">${movie.original_title}</li>
          <li class="movie-genre">${getGenres(movie.id)} | ${movie.release_date.slice(0, 4)}</li>
        </ul>
      </div>`;
        moviesEL.insertAdjacentHTML('beforeend', markup);
      });
    })
    .catch(error => console.error(error));
}
fetchMovies();
