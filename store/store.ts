import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import popularMoviesReducer from "@/features/movies/popularMoviesSlice";
import topratedMoviesReducer from "@/features/movies/topratedMoviesSlice";
import upcomingMoviesReducer from "@/features/movies/upcomingMoviesSlice";
import movieDetailReducer from "@/features/movies/movieDetailSlice";

export const tmdbProjectStore = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    topratedMovies: topratedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    movieDetail: movieDetailReducer,
  },
});

export type AppDispatch = typeof tmdbProjectStore.dispatch;
export type RootState = ReturnType<typeof tmdbProjectStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
