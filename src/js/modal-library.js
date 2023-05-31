import { getPosterLink } from './poster';

function createModal(movie) {
  const modalMovieEl = document.querySelector('.modal-movie');
  const backdrop = document.querySelector('.backdrop');

  const markup = `
    <div class="modal-movie__poster-box">
      <img class="modal-movie__poster" src=${getPosterLink(movie)} alt="${movie.original_title}" />
    </div>
    <button class="modal-movie__btn-close">&times
    </button>

    <div class="modal-movie__info">
      <h2 class="modal-movie__title">${movie.title}</h2>

      <ul class="modal-movie__list">
        <li class="modal-movie__item modal-movie__item--label">vote / votes</li>
        <li class="modal-movie__item modal-movie__item--value">
          <span class="modal-movie__vote">${movie.vote_average.toFixed(
            1,
          )}</span> <span>/ </span><span>${movie.vote_count}</span>
        </li>
        <li class="modal-movie__item modal-movie__item--label">popularity</li>
        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__popularity">${movie.popularity.toFixed(
          1,
        )}</span></li>
        <li class="modal-movie__item modal-movie__item--label">original title</li>
        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__original-title">${
          movie.original_title
        }</span></li>
        <li class="modal-movie__item modal-movie__item--label">genre</li>
        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__genre">${
          movie.genres
        }</span></li>
      </ul>
      <div class="modal-movie__description">
        <h3 class="modal-movie__about">about</h3>
        <p class="modal-movie__text">${movie.overview}</p>
      </div>
      
      <div class="modal-movie__btns">
       <div class="modal-movie__box"> 
       <button class="modal-movie__btn-watched" data-movie='${JSON.stringify(
         movie,
       )}'>add to watched</button>
        <button class="modal-movie__btn-queue" data-movie='${JSON.stringify(
          movie,
        )}'>add to queue</button>
      </div>
  
  <div class="modal-movie__trailer-box"> 
  <button class="modal-movie__btn-trailer" data-id=${
    movie.id
  } data-btn=watchTrailer type="button">🎬 watch trailer</button>   
  </div>        
</div>
    </div>
  `;
  modalMovieEl.innerHTML = markup;

  const closeModalBtn = modalMovieEl.querySelector('.modal-movie__btn-close');
  closeModalBtn.addEventListener('click', () => {
    closeBackdrop();
  });

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      closeBackdrop();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeBackdrop();
    }
  });

  function closeBackdrop() {
    backdrop.classList.add('is-hidden');
  }
}

function openModal(movie) {
  const modal = createModal(movie);
}

export { openModal };
