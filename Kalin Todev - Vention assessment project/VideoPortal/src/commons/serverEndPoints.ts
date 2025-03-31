export const SLICE_NAME = "movieApp";

// Note, below are not exported for a good reason.
// This prevents making server calls whitout having the enpont explicitely defined here
const SERVER_URL = "http://localhost:8080";
const MOVIES = "movies";
const CATEGORIES = "categories";
const FAVORITES = "favorites";

//This should be the only object that exposes server's endpoints
export const serverEndPoints = {
  getFetchMovieDetails: (itemId: number) => `${SERVER_URL}/${MOVIES}/${itemId}`,
  getLoadMovies: () => `${SERVER_URL}/${MOVIES}`,
  getLoadMoviesByCategory: (category: string) => `${SERVER_URL}/${MOVIES}/${CATEGORIES}/${category}`,
  addToFavorites: (itemId: number) => `${SERVER_URL}/${MOVIES}/${FAVORITES}/${itemId}`,
  removeFromFavorites: (itemId: number) => `${SERVER_URL}/${MOVIES}/${FAVORITES}/${itemId}`,
};
