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

export const fetchAsyncPopularMovies = TMDBApiHelper.fetchAsyncPopularMovies;

const initialState: State = {
  page: 1,
  results: [],
  totalResults: 0,
  totalPages: 0,
  loading: true,
};

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: initialState,
  reducers: {
    loadMoreMovies: (state, data: any) => {
      state.results = [...state.results, ...data.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncPopularMovies.fulfilled, (state, { payload }) => {
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

export const getAllPopularMovies = (state: RootState) => state.popularMovies;
export default popularMoviesSlice.reducer;
export const { loadMoreMovies } = popularMoviesSlice.actions;
