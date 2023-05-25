

const API_KEY = '4c48f56c563cad897bb4af72634cd546';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.header__form');
  const input = document.querySelector('.form__input');
  form.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    const searchTerm = input.value.trim();
    if (searchTerm !== '') {
      searchMovies(searchTerm);
    }
  }

  function searchMovies(searchTerm) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      searchTerm,
    )}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.results); // Do something with the movie results
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }
});