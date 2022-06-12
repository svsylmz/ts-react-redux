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

export const fetchAsyncUpcomingMovies = TMDBApiHelper.fetchAsyncUpcomingMovies;

const initialState: State = {
  page: 1,
  results: [],
  totalResults: 0,
  totalPages: 0,
  loading: true,
};

const upcomingMoviesSlicer = createSlice({
  name: "upcomingMovies",
  initialState: initialState,
  reducers: {
    loadMoreMovies: (state, data: any) => {
      state.results = [...state.results, ...data.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncUpcomingMovies.fulfilled, (state, { payload }) => {
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

export const getAllUpcomingMovies = (state: RootState) => state.upcomingMovies;
export default upcomingMoviesSlicer.reducer;
export const { loadMoreMovies } = upcomingMoviesSlicer.actions;
