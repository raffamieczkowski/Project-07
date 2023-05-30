const darkMode = document.querySelector('.header__toggle');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
  const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

  if (isDarkModeEnabled === 'true') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

darkMode.addEventListener('click', e => {
  e.preventDefault();
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkMode.toString());
});
