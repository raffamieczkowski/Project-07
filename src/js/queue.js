import Notiflix from 'notiflix';

// localStorage.clear()
const modalContainer = document.querySelector('.modal-movie');
modalContainer.addEventListener('click', ev => {
  const clickedElement = ev.target;

  if (clickedElement.classList.contains('modal-movie__btn-queue')) {
    // Pobranie informacji o filmie z atrybutów danych
    const movieId = clickedElement.dataset.id;
    const movieTitle = clickedElement.dataset.title;
    const movieDate = clickedElement.dataset.date;
    const movieGenres = clickedElement.dataset.genres;

    const movie = {
      id: movieId,
      title: movieTitle,
      date: movieDate,
      genres: movieGenres,
    };
    handleSaveButtonClick(movie);
    // displayMovieListFromLocalStorage(movie);
  }
});

function getMovieListFromLocalStorage() {
  // Pobranie listy filmów z localStorage
  const movieListString = localStorage.getItem('movieList');

  // Konwersja ciągu znaków na obiekt JavaScript
  const movieList = JSON.parse(movieListString);

  return movieList;
}

function saveMovieToLocalStorage(movie) {
  // Pobranie listy filmów z localStorage
  const storedMovieList = getMovieListFromLocalStorage() || [];

  // Sprawdzenie, czy dany film już istnieje na liście
  const existingMovie = storedMovieList.find(item => item.id === movie.id);

  if (!existingMovie) {
    // Dodanie filmu do listy
    storedMovieList.push(movie);
    Notiflix.Notify.success('Movie has been added to your queue');
    // Konwertowanie listy filmów na ciąg znaków (string)
    const movieListString = JSON.stringify(storedMovieList);

    // Zapisanie zaktualizowanej listy filmów w localStorage
    localStorage.setItem('movieList', movieListString);

    // console.log('Film został zapisany w localStorage.');
  } else {
    // console.log('Ten film już istnieje na liście.');
    Notiflix.Notify.failure('Movie is already in your queue');
  }
}

function handleSaveButtonClick(movie) {
  // Zapisanie filmu do localStorage
  saveMovieToLocalStorage(movie);
}

// function displayMovieListFromLocalStorage() {
//   // Pobranie listy filmów z localStorage
//   const movieList = getMovieListFromLocalStorage();

//   // Wyświetlanie listy filmów
//   movieList.forEach(movie => {
//     console.log(movie.title);
//   });
// }
