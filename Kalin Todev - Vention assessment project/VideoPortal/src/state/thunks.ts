import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverEndPoints, SLICE_NAME } from "../commons/serverEndPoints";
import axios from "axios";

const LOAD_MOVIE_DETAILS_THUNK = "loadMovieDetails";
const LOAD_MOVIES_THUNK = "loadMovies";
const LOAD_MOVIES_BY_CATEGORY_THUNK = "loadMoviesByCategory";
const ADD_TO_FAVORITES_THUNK = "addToFavorites";
const REMOVE_FROM_FAVORITES_THUNK = "removeFromFavorites";

const thunks = {
  [LOAD_MOVIE_DETAILS_THUNK]: createAsyncThunk(
    `${SLICE_NAME}/${LOAD_MOVIE_DETAILS_THUNK}`,
    async (itemId: number) => {
      const response = await axios.get(serverEndPoints.getFetchMovieDetails(itemId));
      return response.data;
    }
  ),
  [LOAD_MOVIES_THUNK]: createAsyncThunk(
    `${SLICE_NAME}/${LOAD_MOVIES_THUNK}`,
    async () => {
      const response = await axios.get(serverEndPoints.getLoadMovies());
      return response.data;
    }
  ),
  [LOAD_MOVIES_BY_CATEGORY_THUNK]: createAsyncThunk(
    `${SLICE_NAME}/${LOAD_MOVIES_BY_CATEGORY_THUNK}`,
    async (category: string) => {
      const response = await axios.get(serverEndPoints.getLoadMoviesByCategory(category));
      return response.data;
    }
  ),
  [ADD_TO_FAVORITES_THUNK]: createAsyncThunk(
    `${SLICE_NAME}/${ADD_TO_FAVORITES_THUNK}`,
    async (itemId: number) => {
      const response = await axios.post(serverEndPoints.addToFavorites(itemId));
      return response.data;
    }
  ),
  [REMOVE_FROM_FAVORITES_THUNK]: createAsyncThunk(
    `${SLICE_NAME}/${REMOVE_FROM_FAVORITES_THUNK}`,
    async (itemId: number) => {
      const response = await axios.delete(serverEndPoints.removeFromFavorites(itemId));
      return response.data;
    }
  ),
};

export const loadMovieDetails = thunks[LOAD_MOVIE_DETAILS_THUNK];
export const loadMovies = thunks[LOAD_MOVIES_THUNK];
export const loadMoviesByCategory = thunks[LOAD_MOVIES_BY_CATEGORY_THUNK];
export const addToFavorites = thunks[ADD_TO_FAVORITES_THUNK];
export const removeFromFavorites = thunks[REMOVE_FROM_FAVORITES_THUNK];
