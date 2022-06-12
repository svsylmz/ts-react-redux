import { CastItemData } from "@/interfaces/tmdbRender";
import Image from "next/image";
import { tmdbCastImageLoader } from "@/helpers/api/tmdbImageLoader";
import "react-circular-progressbar/dist/styles.css";

const CastItem: React.FC<{ item: CastItemData }> = ({ item }) => {
  return (
    <>
      {item.profile_path && (
        <div className="cast-item  w-48 h-[350px] relative bg-white rounded border shadow-tmdb-box cursor-pointer mr-4">
          <div className="cast-item__image relative w-48 h-[70%]">
            <Image
              loader={tmdbCastImageLoader}
              src={item.profile_path}
              layout="fill"
              objectFit="cover"
              className="rounded-t"
              alt="TMDB"
            />
          </div>
          <div className="cast-item__info  p-1 flex flex flex-col mt-2">
            <h2 className="movie-title font-bold" data-testid="test-3">
              {item.name}
            </h2>
            <p
              className="movie-date text-sm text-slate-500"
              data-testid="test-4"
            >
              {item.character}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CastItem;
