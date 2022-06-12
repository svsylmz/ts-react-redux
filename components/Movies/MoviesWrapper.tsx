import MovieItem from "@/components/Movies/MovieItem";

export default function MoviesWrapper({ moviesData }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 gap-8">
      {moviesData.map((data: any) => (
        <MovieItem key={data.id} item={data} />
      ))}
    </div>
  );
}
