import { API_KEY } from './api-key';
import { getGenres } from './genres';
import { createPagination } from './pagination';
const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

(async () => {
  createPagination(`${trendingUrl}&api_key=${API_KEY}`);
})();
