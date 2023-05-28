import { API_KEY } from './api-key';
import { createPagination } from './pagination';
const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

async function trendingMovies() {
  createPagination(`${trendingUrl}&api_key=${API_KEY}`);
}

trendingMovies();

export { trendingMovies };
