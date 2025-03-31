import { RootState } from "./store";

export const moviesSelector = (state: RootState) => state.movieApp.movies;
export const statusMoviesLoadingSelector = (state: RootState) => state.movieApp.status.loadMovies;
export const statusMovieDetailsLoadingSelector = (state: RootState) => state.movieApp.status.movieDetails;
export const selectedMovieDetailsSelector = (state: RootState) => state.movieApp.movieDetails;