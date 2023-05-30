// localStorage.clear()
const modalContainer = document.querySelector('.modal-movie');
modalContainer.addEventListener('click', ev => {
  const clickedElement = ev.target;

  if (clickedElement.classList.contains('modal-movie__btn-queue')) {
    const movie = JSON.parse(clickedElement.dataset.movie);
    console.log(movie);
    handleSaveButtonClick(movie, 'queueList', 'watchedList');
    displayMovieListFromLocalStorage('queueList');
  } else if (clickedElement.classList.contains('modal-movie__btn-watched')) {
    const movie = JSON.parse(clickedElement.dataset.movie);
    console.log(movie);
    handleSaveButtonClick(movie, 'watchedList', 'queueList');
    displayMovieListFromLocalStorage('watchedList');
  }
});

function getMovieListFromLocalStorage(key) {
  const movieListString = localStorage.getItem(key);
  const movieList = JSON.parse(movieListString);
  return movieList;
}

function saveMovieToLocalStorage(movie, key, otherKey) {
  const storedMovieList = getMovieListFromLocalStorage(key) || [];
  const existingMovieIndex = storedMovieList.findIndex(item => item.id === movie.id);

  if (existingMovieIndex === -1) {
    storedMovieList.push(movie);
    const movieListString = JSON.stringify(storedMovieList);
    localStorage.setItem(key, movieListString);
    console.log('Film został zapisany w localStorage.');

    // Usunięcie filmu z drugiej listy, jeśli istnieje/ Delete a movie from the other list if movie exists there
    const otherMovieList = getMovieListFromLocalStorage(otherKey);
    if (otherMovieList) {
      const otherMovieIndex = otherMovieList.findIndex(item => item.id === movie.id);
      if (otherMovieIndex !== -1) {
        otherMovieList.splice(otherMovieIndex, 1);
        const otherMovieListString = JSON.stringify(otherMovieList);
        localStorage.setItem(otherKey, otherMovieListString);
        console.log('Film został usunięty z drugiej listy.');
      }
    }
  } 
}

function handleSaveButtonClick(movie, key, otherKey) {
  saveMovieToLocalStorage(movie, key, otherKey);
}

function displayMovieListFromLocalStorage(key) {
  const movieList = getMovieListFromLocalStorage(key);

  if (movieList) {
    movieList.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('Brak filmów na liście.');
  }
}