import { configureStore } from "@reduxjs/toolkit";
import MovieAppReducer from "./slice";

export const store = configureStore({
  reducer: {
    movieApp: MovieAppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
