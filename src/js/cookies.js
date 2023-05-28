const popup = document.querySelector('.cookies');
const acceptButton = document.querySelector('#accept-cookies');

function acceptCookies() {
  popup.style.display = 'none';
  sessionStorage.setItem('cookiesAccepted', true);
}

document.addEventListener('DOMContentLoaded', function () {
  if (!sessionStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      popup.style.display = 'block';
    }, 3000);
  } else {
    popup.style.display = 'none';
  }
});

acceptButton.addEventListener('click', acceptCookies);
