import { useAppSelector } from "@/store/hooks";
import { getMovieDetail } from "@/features/movies/movieDetailSlice";
import CastItem from "./CastItem";

export default function Cast() {
  const { casts, castsLoading } = useAppSelector(getMovieDetail);
  return (
    <>
      {!castsLoading && (
        <div className="cast">
          <div className="cast-title text-2xl">Top Billed Cast</div>
          <div className="cast-scroll w-full flex overflow-x-auto">
            {casts.map((item: any) => {
              return <CastItem key={item.cast_id} item={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
