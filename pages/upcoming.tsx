import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchAsyncUpcomingMovies,
  getAllUpcomingMovies,
  loadMoreMovies,
} from "@/features/movies/upcomingMoviesSlice";
import Layout from "@/components/Layout";
import MoviesWrapper from "@/components/Movies/MoviesWrapper";

export default function Upcoming() {
  const dispatch = useAppDispatch();
  let [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncUpcomingMovies(page));
  }, [dispatch, page]);

  const { results } = useAppSelector(getAllUpcomingMovies);

  const getMoreMovies = () => {
    setPage(++page);
    dispatch(loadMoreMovies(results));
  };

  return (
    <Layout mainPage={true}>
      <MoviesWrapper moviesData={results} />
      <button
        onClick={getMoreMovies}
        className="w-full h-20 text-2xl font-bold text-white bg-sky-500 hover:bg-sky-600 rounded mt-10"
      >
        Load More
      </button>
    </Layout>
  );
}
