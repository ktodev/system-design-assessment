import { createSlice } from "@reduxjs/toolkit";
import { Movie, MovieDetails } from "./interfaces";
import { SLICE_NAME } from "../commons/serverEndPoints";
import {
  addToFavorites,
  loadMovieDetails,
  loadMovies,
  loadMoviesByCategory,
  removeFromFavorites,
} from "./thunks";
import { LoadingStatus } from "../commons/constants";

export interface MovieAppState {
  movieDetails: MovieDetails | null;
  movies: Movie[];
  status: {
    movieDetails: LoadingStatus | null;
    loadMovies: LoadingStatus | null;
  };
}

const initialState: MovieAppState = {
  movieDetails: null,
  movies: [],
  status: {
    movieDetails: null,
    loadMovies: null,
  },
};

export const movieAppSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status.loadMovies = LoadingStatus.Loaded;
      })
      .addCase(loadMovies.pending, (state) => {
        state.status.loadMovies = LoadingStatus.Loading;
      })
      .addCase(loadMovies.rejected, (state) => {
        state.movies = [];
        state.status.loadMovies = LoadingStatus.Error;
      })

      .addCase(loadMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        state.status.movieDetails = LoadingStatus.Loaded;
      })
      .addCase(loadMovieDetails.pending, (state) => {
        state.status.movieDetails = LoadingStatus.Loading;
      })
      .addCase(loadMovieDetails.rejected, (state) => {
        state.movieDetails = null;
        state.status.movieDetails = LoadingStatus.Error;
      })

      .addCase(loadMoviesByCategory.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status.loadMovies = LoadingStatus.Loaded;
      })
      .addCase(loadMoviesByCategory.pending, (state) => {
        state.status.loadMovies = LoadingStatus.Loading;
      })
      .addCase(loadMoviesByCategory.rejected, (state) => {
        state.movies = [];
        state.status.loadMovies = LoadingStatus.Error;
      })

      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.movies[action.payload].favorite = true;
      })

      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.movies[action.payload].favorite = false;
      })
  },
});

export default movieAppSlice.reducer;
