export interface MovieItemData {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  overview: string;
}

export interface CastItemData {
  cast_id: number;
  name: string;
  character: string;
  profile_path: string;
}
