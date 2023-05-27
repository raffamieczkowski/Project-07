import { API_KEY } from '../js/api-key';

async function getGenres(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    const movie = await response.json();
    const genres = movie.genres.map(genre => genre.name).join(', ');
    return genres;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export { getGenres };