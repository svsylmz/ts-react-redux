import { createSlice } from "@reduxjs/toolkit";
import { TMDBMovieDetailResult, Cast } from "@/interfaces/tmdb";
import { TMDBApiHelper } from "@/helpers/api/tmdbApiHelper";
import { RootState } from "@/store/store";

interface State {
  results: TMDBMovieDetailResult[];
  casts: Cast[];
  detailLoading: boolean;
  castsLoading: boolean;
}

export const fetchAsyncMovieDetail = TMDBApiHelper.fetchAsyncMovieDetail;
export const fetchAsyncMovieCasts = TMDBApiHelper.fetchAsyncMovieCredits;

const initialState: State = {
  results: [],
  casts: [],
  detailLoading: true,
  castsLoading: true,
};

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovieDetail.pending, (state) => {
        state.detailLoading = true;
      })
      .addCase(fetchAsyncMovieDetail.fulfilled, (state, { payload }) => {
        return {
          ...state,
          results: payload,
          detailLoading: false,
        };
      });

    builder
      .addCase(fetchAsyncMovieCasts.pending, (state) => {
        state.castsLoading = true;
      })
      .addCase(fetchAsyncMovieCasts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          casts: payload.cast,
          castsLoading: false,
        };
      });
    //I did not add error case for this project
  },
});

export const getMovieDetail = (state: RootState) => state.movieDetail;
export default movieDetailSlice.reducer;
