const darkMode = document.querySelector('.header__toggle');
const body = document.body;

// Sprawdzanie, czy tryb ciemny jest już włączony
const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');
if (isDarkModeEnabled) {
  body.classList.add('dark-mode');
}

// Obsługa kliknięcia przycisku
darkMode.addEventListener('click', e => {
  e.preventDefault();
  body.classList.toggle('dark-mode');

  // Zapisanie stanu trybu ciemnego w localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkMode);
});
