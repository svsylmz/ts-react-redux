import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import MovieDetailWrapper from "@/components/MovieDetail/MovieDetailWrapper";

export default function MovieDetail() {
  const router = useRouter();
  const movieId = router.query.movieId as string;
  return (
    <>
      <Layout mainPage={false}>
        {movieId && <MovieDetailWrapper movieId={movieId} />}
      </Layout>
    </>
  );
}
