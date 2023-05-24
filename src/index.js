import './js/modal-movie';
import { API_KEY } from './js/api-key';
import { getGenres } from './js/genres';

const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const moviesEL = document.querySelector('.movies-list');

async function fetchMovies() {
  try {
    const response = await fetch(`${trendingUrl}&api_key=${API_KEY}&page=1`);
    const data = await response.json();

    const movies = data.results;

    const genrePromises = movies.map(movie => getGenres(movie.id));
    const genres = await Promise.all(genrePromises);

    movies.forEach((movie, index) => {
      movie.genres = genres[index];
      const markup = `<div class="movie__card">
        <a href="#"> <img class="movie__poster" src="https://image.tmdb.org/t/p/original${
          movie.poster_path
        }" /></a>
        <ul class="movie__short-descr">
          <li class="movie__title">${movie.original_title}</li>
          <li class="movie__genre">${movie.genres} | ${movie.release_date.slice(0, 4)}</li>
        </ul>
      </div>`;
      moviesEL.insertAdjacentHTML('beforeend', markup);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchMovies();
