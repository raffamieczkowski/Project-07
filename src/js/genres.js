import { API_KEY } from '../js/api-key';
function getGenres(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?&api_key=${API_KEY}&language=en-US`)
    .then(response => {
      return response.json();
    })
    .then(movie => {
      const markup = movie.genres.map(genres => genres.name).join(', ');
      return markup;
    })
    .catch(error => console.error(error));
}

export { getGenres };
