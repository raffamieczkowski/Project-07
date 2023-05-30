const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
