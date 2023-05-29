// localStorage.clear()
const modalContainer = document.querySelector('.modal-movie');
modalContainer.addEventListener('click', ev => {
  const clickedElement = ev.target;

  if (clickedElement.classList.contains('modal-movie__btn-queue')) {
    // Pobranie informacji o filmie z atrybutów danych
    const movie = JSON.parse(clickedElement.dataset.movie);
    console.log(movie)
    handleSaveButtonClick(movie);
    displayMovieListFromLocalStorage();
  }
});

function getMovieListFromLocalStorage() {
  // Pobranie listy filmów z localStorage
  const movieListString = localStorage.getItem('queueList');

  // Konwersja ciągu znaków na obiekt JavaScript
  const queueList = JSON.parse(movieListString);

  return queueList;
}

function saveMovieToLocalStorage(movie) {
  // Pobranie listy filmów z localStorage
  const storedMovieList = getMovieListFromLocalStorage() || [];

  // Sprawdzenie, czy dany film już istnieje na liście
  const existingMovie = storedMovieList.find(item => item.id === movie.id);

  if (!existingMovie) {
    // Dodanie filmu do listy
    storedMovieList.push(movie);

    // Konwertowanie listy filmów na ciąg znaków (string)
    const movieListString = JSON.stringify(storedMovieList);

    // Zapisanie zaktualizowanej listy filmów w localStorage
    localStorage.setItem('queueList', movieListString);

    console.log('Film został zapisany w localStorage.');
  } else {
    console.log('Ten film już istnieje na liście.');
  }
}

function handleSaveButtonClick(movie) {
  // Zapisanie filmu do localStorage
  saveMovieToLocalStorage(movie);
}

function displayMovieListFromLocalStorage() {
  // Pobranie listy filmów z localStorage
  const queueList = getMovieListFromLocalStorage();

  // Wyświetlanie listy filmów
  queueList.forEach(movie => {
    console.log(movie.title);
  });
}

// function saveMovieToLocalStorage(movie, listType) {
//   const storedMovieList = getMovieListFromLocalStorage(listType) || [];
//   const otherListType = listType === 'queueList' ? 'watchedList' : 'queueList';
//   const otherList = getMovieListFromLocalStorage(otherListType) || [];

//   const existingMovieIndex = storedMovieList.findIndex(item => item.id === movie.id);
//   const existingMovieInOtherList = otherList.some(item => item.id === movie.id);

//   if (!existingMovieIndex) {
//     storedMovieList.push(movie);
//     localStorage.setItem(listType, JSON.stringify(storedMovieList));
//     console.log('Film został zapisany w localStorage.');
//   } else {
//     console.log('Ten film już istnieje na liście.');
//   }

//   if (existingMovieInOtherList) {
//     removeMovieFromLocalStorage(movie, otherListType);
//     console.log('Film został usunięty z drugiej listy.');
//   }
// }

// function removeMovieFromLocalStorage(movie, listType) {
//   const storedMovieList = getMovieListFromLocalStorage(listType) || [];
//   const updatedMovieList = storedMovieList.filter(item => item.id !== movie.id);
//   localStorage.setItem(listType, JSON.stringify(updatedMovieList));
//   console.log('Film został usunięty z localStorage.');
// }
