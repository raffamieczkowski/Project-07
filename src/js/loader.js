function showLoader() {
  const loader = document.getElementById('pre-load');
  loader.classList.remove('hidden');
}

function hideLoader() {
  const loader = document.getElementById('pre-load');
  loader.classList.add('hidden');
}

export { showLoader, hideLoader };
