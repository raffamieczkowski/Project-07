const darkMode = document.querySelector('.header__toggle');
const body = document.body;

const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');
if (isDarkModeEnabled) {
  body.classList.add('dark-mode');
}

darkMode.addEventListener('click', e => {
  e.preventDefault();
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkMode);
});
