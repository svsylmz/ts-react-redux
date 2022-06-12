import { useAppSelector } from "@/store/hooks";
import { getMovieDetail } from "@/features/movies/movieDetailSlice";
import Image from "next/image";
import {
  tmdbBigSizeImageLoader,
  tmdbSmallSizeImageLoader,
} from "@/helpers/api/tmdbImageLoader";
import { format } from "date-fns";
import { CircularProgressbar } from "react-circular-progressbar";

export default function MovieShowcase() {
  const { results, detailLoading }: any = useAppSelector(getMovieDetail);
  const votePercentage: number = results.vote_average * 10;
  return (
    <>
      {!detailLoading && (
        <>
          <div className="movie-showcase w-full h-[60vh] flex relative bg-tmdb-showcase-bg bg-gradient-to-br from-tmdb-gradient-from to-tmdb-gradient-to">
            <Image
              loader={tmdbBigSizeImageLoader}
              src={results.backdrop_path}
              layout="fill"
              objectFit="cover"
              alt="TMDB"
              className="opacity-10"
            />

            <div className="movie-showcase__content flex pt-8 flex-1 pb-8 pr-12 pl-12">
              <div className="movie-poster relative w-[22%] hidden sm:flex h-full mr-5">
                <Image
                  loader={tmdbSmallSizeImageLoader}
                  src={results.poster_path}
                  layout="fill"
                  objectFit="fill"
                  alt="TMDB"
                  className="rounded"
                />
              </div>
              <div className="movie-information lg:p-5 sm:p-0 lg:w-[78%] sm:w-full">
                <div className="title text-white font-bold text-3xl tracking-wide">
                  {results.title}
                  <span className="movie-date pl-1 font-normal text-slate-300">
                    ({format(new Date(results.release_date), "yyyy")})
                  </span>
                </div>
                <div className="genres flex text-white">
                  {results.genres.map((genre: any, index: number) => {
                    return (
                      <span key={genre.id}>
                        {(index ? ", " : "") + genre.name}
                      </span>
                    );
                  })}
                </div>
                <div className="movie-score w-16 h-16 mt-5 hidden sm:flex">
                  <CircularProgressbar
                    value={votePercentage}
                    text={`${votePercentage}%`}
                    background={true}
                    styles={{
                      root: {},
                      background: {
                        fill: "#081c22",
                      },
                      text: {
                        fontSize: "30px",
                        fill: "#fff",
                        fontWeight: "bold",
                      },
                      path: {
                        stroke: "#22d07a",
                      },
                      trail: {
                        stroke: "#102A24",
                      },
                    }}
                  />
                </div>
                <div className="movie-tagline mt-5 italic text-slate-300">
                  {results.tagline}
                </div>
                <div className="movie-overview">
                  <h2 className="movie-overview__title font-bold text-white mt-5 text-2xl tracking-wide">
                    Overview
                  </h2>
                  <p className="movie-overview__content text-white mt-1 text-sm">
                    {results.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
