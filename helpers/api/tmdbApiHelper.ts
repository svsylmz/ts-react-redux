import { createAsyncThunk } from "@reduxjs/toolkit";
import apiFetcher from "@/helpers/api/apiFetcher";

export class TMDBApiHelper {
  // <-- MOVIE_DETAIL

  static readonly TMDBMovieDetail: string = `/movie/popular`;

  static fetchAsyncMovieDetail = createAsyncThunk(
    "movies/fetchAsyncMovieDetail",
    async (movieId: string) => {
      const response = await apiFetcher.get(
        `movie/${movieId}?api_key=${process.env.apiKey}&language=en-US`
      );
      return response.data;
    }
  );

  static fetchAsyncMovieCredits = createAsyncThunk(
    "movies/fetchAsyncMovieCredits",
    async (movieId: string) => {
      const response = await apiFetcher.get(
        `movie/${movieId}/credits?api_key=${process.env.apiKey}&language=en-US`
      );
      return response.data;
    }
  );

  // MOVIE_DETAIL -->

  // <-- POPULAR_MOVIES

  static readonly TMDBPopularMovies: string = `/movie/popular`;

  static fetchAsyncPopularMovies = createAsyncThunk(
    "movies/fetchAsyncPopularMovies",
    async (page: number = 1) => {
      const response = await apiFetcher.get(
        `${TMDBApiHelper.TMDBPopularMovies}?api_key=${process.env.apiKey}&language=en-US&page=${page}`
      );
      return response.data;
    }
  );

  // POPULAR_MOVIES -->

  // <-- TOPRATED_MOVIES

  static readonly TMDBTopratedMovies: string = `/movie/top_rated`;

  static fetchAsyncTopratedMovies = createAsyncThunk(
    "movies/fetchAsyncTopratedMovies",
    async (page: number = 1) => {
      const response = await apiFetcher.get(
        `${TMDBApiHelper.TMDBTopratedMovies}?api_key=${process.env.apiKey}&language=en-US&page=${page}`
      );
      return response.data;
    }
  );

  // TOPRATED_MOVIES -->

  // <-- UPCOMING_MOVIES

  static readonly TMDBUpcomingMovies: string = `/movie/upcoming`;

  static fetchAsyncUpcomingMovies = createAsyncThunk(
    "movies/fetchAsyncUpcomingMovies",
    async (page: number = 1) => {
      const response = await apiFetcher.get(
        `${TMDBApiHelper.TMDBUpcomingMovies}?api_key=${process.env.apiKey}&language=en-US&page=${page}`
      );
      return response.data;
    }
  );

  // UPCOMING_MOVIES -->
}
