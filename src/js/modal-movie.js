const openModalBtn = document.querySelector('.movies-list');
const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.modal-movie__btn-close');

console.log(openModalBtn);

openModalBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
});

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});
