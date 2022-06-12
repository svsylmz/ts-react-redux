import Link from "next/link";
import { MovieItemData } from "@/interfaces/tmdbRender";
import Image from "next/image";
import { tmdbSmallSizeImageLoader } from "@/helpers/api/tmdbImageLoader";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import urlSlug from "url-slug";
import { format } from "date-fns";

const MovieItem: React.FC<{ item: MovieItemData }> = ({ item }) => {
  const votePercentage: number = item.vote_average * 10;

  return (
    <Link
      href={{
        pathname: "movie/" + item.id,
        query: { movieName: urlSlug(item.title) },
      }}
      passHref
    >
      <a data-testid="test-2">
        <div className="movie-item h-[26rem] relative bg-white rounded border shadow-tmdb-box cursor-pointer">
          <div className="movie-item__image relative w-[100%] h-[80%]">
            <Image
              loader={tmdbSmallSizeImageLoader}
              src={item.poster_path}
              layout="fill"
              objectFit="fill"
              className="rounded-t"
              alt="TMDB"
            />
          </div>
          <div className="vote absolute top-[75%] w-9 ml-2">
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
          <div className="movie-item__info h-[20%] p-1 flex flex flex-col mt-2">
            <h2 className="movie-title font-bold" data-testid="test-0">
              {item.title}
            </h2>
            <p
              className="movie-date text-sm text-slate-500"
              data-testid="test-1"
            >
              {format(new Date(item.release_date), "dd MMM yyyy")}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MovieItem;
