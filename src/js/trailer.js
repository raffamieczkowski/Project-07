// import VimeoPlayer from '@vimeo/player';
// import { API_KEY } from './api-key';

// document.addEventListener('click', async e => {
//   if (e.target.classList.contains('modal-movie__btn-trailer')) {
//     const movieId = e.target.dataset.id;
//     console.log(movieId);
//     await getTrailer(movieId);
//   }
// });

// async function getTrailer(movieId) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`,
//     );
//     const data = await response.json();

//     if (data.results.length > 0) {
//       const trailerKey = data.results[0].key;

//       const trailerUrl = `https://player.vimeo.com/video/${trailerKey}`;

//       const iframe = document.createElement('iframe');
//       iframe.id = 'vimeo-player';
//       iframe.src = trailerUrl;
//       iframe.width = '640';
//       iframe.height = '360';
//       iframe.frameborder = '0';
//       iframe.allowfullscreen = true;
//       iframe.allow = 'autoplay; encrypted-media';

//       const player = new VimeoPlayer(iframe);

//       player.on('play', () => {
//         console.log('Video started playing.');
//       });

//       player.on('pause', () => {
//         console.log('Video paused.');
//       });

//       player.on('ended', () => {
//         console.log('Video ended.');
//       });

//       player.on('click', () => {
//         player.play();
//       });

//       const modal = document.querySelector('.modal-movie');
//       modal.innerHTML = '';
//       modal.appendChild(iframe);
//     } else {
//       console.log('No trailer available for this movie.');
//     }
//   } catch (error) {
//     console.log('An error occurred while downloading the trailer:', error);
//   }
// }

// async function getTrailer(movieId) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`,
//     );
//     const data = await response.json();

//     // Sprawdzenie, czy istnieją zwiastuny dla filmu
//     if (data.results.length > 0) {
//       const trailerKey = data.results[0].key;

//       // Tworzenie adresu URL zwiastunu na podstawie klucza
//       const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

//       const lightboxElement = document.createElement('a');
//       lightboxElement.href = trailerUrl;

//       const lightbox = new SimpleLightbox(lightboxElement);
//       lightbox.open();
//     } else {
//       console.log('No trailer available for this movie.');
//     }
//   } catch (error) {
//     console.log('An error occurred while downloading the trailer:', error);
//   }
// }

// function getTrailer(movieId) {
//   // Wywołaj zapytanie do API The Movie Database, aby pobrać zwiastun filmu na podstawie movieId
//   // Użyj dostępnej biblioteki do wyświetlania zwiastunu (np. SimplyLightbox)

//   // Przykładowe użycie SimplyLightbox:
//   const gallery = new SimplyLightbox();
//   gallery.open({ items: [`https://www.youtube.com/watch?v=${movie.id}`] }); // Zamiast VIDEO_ID podstaw odpowiedni identyfikator zwiastunu
// }

// const trailerRef = document.querySelector('[data-btn=watchTrailer]');
// if (!keyTrailer) {
//   trailerRef.classList.add('is-hidden');
//   // trailerRef.setAttribute('hidden', 'true');
// }

// trailerRef.onclick = () => {
//   basicLightbox
//     .create(
//       `<iframe width="640" height="360"
//         src="https://www.youtube.com/embed/${keyTrailer}"
//         title="" frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
//     )
//     .show();
// };
