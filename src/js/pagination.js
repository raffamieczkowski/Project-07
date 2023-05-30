import { displayMovies } from './search-film';
import { getGenres } from './genres';

let currentPage = 1;
const itemsPerPage = 20;

function createPaginationButton(text, isDisabled, isCurrent) {
  const button = document.createElement('button');
  button.textContent = text;
  button.disabled = isDisabled;
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
  if (isCurrent) {
    button.classList.add('pagination-button--current');
  }
  button.classList.add('pagination-button');
  return button;
}

async function createPagination(url) {
  try {
    const response = await fetch(`${url}&page=${currentPage}`);
    const data = await response.json();
    const totalPages = Math.ceil(data.total_pages / itemsPerPage);
    const genrePromises = data.results.map(movie => getGenres(movie.id));
    const genres = await Promise.all(genrePromises);

    data.results.forEach((movie, index) => {
      movie.genres = genres[index];
    });

    displayMovies(data.results);
    renderPagination(totalPages, url);
  } catch (error) {
    console.log('Error', error);
  }
}

function renderPagination(totalPages, url) {
  const paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.innerHTML = '';

  const previousButton = createPaginationButton('◀', currentPage === 1, false);
  previousButton.addEventListener('click', async () => {
    currentPage--;
    await createPagination(url);
  });
  previousButton.classList.add('pagination-button--previous');
  paginationContainer.appendChild(previousButton);

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = createPaginationButton(i.toString(), i === currentPage, i === currentPage);
      pageButton.addEventListener('click', async () => {
        currentPage = i;
        await createPagination(url);
      });
      paginationContainer.appendChild(pageButton);
    }
  } else {
    if (window.screen.width >= 768) {
      const firstPageButton = createPaginationButton('1', currentPage === 1, currentPage === 1);
      firstPageButton.addEventListener('click', async () => {
        currentPage = 1;
        await createPagination(url);
      });
      paginationContainer.appendChild(firstPageButton);
    }
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);
    if (window.screen.width < 768) {
      startPage = Math.max(1, currentPage - 2);
      endPage = Math.min(totalPages, currentPage + 2);
    }
    if (currentPage <= 3) {
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
    }

    if (window.screen.width >= 768 && startPage > 2) {
      paginationContainer.appendChild(createPaginationButton('...', true));
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageButton = createPaginationButton(i.toString(), i === currentPage, i === currentPage);
      pageButton.addEventListener('click', async () => {
        currentPage = i;
        await createPagination(url);
      });
      paginationContainer.appendChild(pageButton);
    }
    if (window.screen.width >= 768) {
      if (endPage < totalPages - 1) {
        paginationContainer.appendChild(createPaginationButton('...', true));
      }

      const lastPageButton = createPaginationButton(
        totalPages.toString(),
        currentPage === totalPages,
        currentPage === totalPages,
      );
      lastPageButton.addEventListener('click', async () => {
        currentPage = totalPages;
        await createPagination(url);
      });
      paginationContainer.appendChild(lastPageButton);
    }
  }
  const nextButton = createPaginationButton('▶', currentPage === totalPages, false);
  nextButton.addEventListener('click', async () => {
    currentPage++;
    await createPagination(url);
  });
  nextButton.classList.add('pagination-button--next');
  paginationContainer.appendChild(nextButton);
}
function setCurrentPage(page) {
  currentPage = page;
}

export { createPagination, setCurrentPage };
