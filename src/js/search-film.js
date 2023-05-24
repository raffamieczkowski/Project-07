import { API_KEY } from './api-key';
import { getGenres } from './genres';
import Notiflix from 'notiflix';


function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      displayMovies(movies); 
      showNotification(movies.length); 
    })
    .catch(error => {
      console.error('Wystąpił błąd:', error);
    });
}

function displayMovies(movies) {
  const navigationList = document.querySelector('.header__navigation');


  navigationList.innerHTML = '';

  movies.forEach(movie => {
    const { title, id } = movie;

    const listItem = document.createElement('li');
    listItem.textContent = title;

   
    getGenres(id)
      .then(genres => {
        const genreMarkup = genres.join(', ');
        const genreElement = document.createElement('span');
        genreElement.textContent = genreMarkup;
        listItem.appendChild(genreElement);
      })
      .catch(error => {
        console.error('Wystąpił błąd podczas pobierania gatunków:', error);
      });

    navigationList.appendChild(listItem);
  });
}

//liczba znalezionych filmów
function showNotification(movieCount) {
  Notiflix.Notify.success(`Znaleziono ${movieCount} filmów.`);
}


function handleFormSubmit(event) {
  event.preventDefault(); 

  const input = document.querySelector('.form__input');
  const query = input.value;

  if (query) {
    searchMovies(query); 
    input.value = ''; 
  }
}


const form = document.querySelector('.header__form');
form.addEventListener('submit', handleFormSubmit);
