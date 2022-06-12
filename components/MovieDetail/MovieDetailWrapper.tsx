import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import {
  fetchAsyncMovieDetail,
  fetchAsyncMovieCasts,
} from "@/features/movies/movieDetailSlice";
import MovieShowcase from "./MovieShowcase";
import Cast from "./Cast";

interface movieDetailProps {
  movieId: string;
}

export default function MovieDetailWrapper({ movieId }: movieDetailProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(movieId));
    dispatch(fetchAsyncMovieCasts(movieId));
  }, [movieId, dispatch]);

  return (
    <>
      <div className="movie-detail-wrapper">
        <div className="movie-detail-wrapper__showcase">
          <MovieShowcase />
        </div>
        <div className="movie-detail-bottom h-[500px] flex pt-5 pr-10 pl-10">
          <div className="cast-area w-full">
            <Cast />
          </div>
        </div>
      </div>
    </>
  );
}
