import { createSlice } from "@reduxjs/toolkit";
import { TMDBMoviesResult } from "@/interfaces/tmdb";
import { TMDBApiHelper } from "@/helpers/api/tmdbApiHelper";
import { RootState } from "@/store/store";

interface State {
  page: number;
  results: TMDBMoviesResult[];
  totalResults: number;
  totalPages: number;
  loading: boolean;
}

export const fetchAsyncTopratedMovies = TMDBApiHelper.fetchAsyncTopratedMovies;

const initialState: State = {
  page: 1,
  results: [],
  totalResults: 0,
  totalPages: 0,
  loading: true,
};

const topratedMoviesSlicer = createSlice({
  name: "topratedMovies",
  initialState: initialState,
  reducers: {
    loadMoreMovies: (state, data: any) => {
      state.results = [...state.results, ...data.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncTopratedMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncTopratedMovies.fulfilled, (state, { payload }) => {
        return {
          ...state,
          results: payload.results,
          totalResults: payload.totalResults,
          totalPages: payload.totalPages,
          loading: false,
        };
      });
    //I did not add error case for this project
  },
});

export const getAllTopratedMovies = (state: RootState) => state.topratedMovies;
export default topratedMoviesSlicer.reducer;
export const { loadMoreMovies } = topratedMoviesSlicer.actions;
