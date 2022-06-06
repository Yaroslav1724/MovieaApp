export interface Movie {
  vote_count: number;
  video: boolean;
  poster_path: string;
  popularity: number;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  genre_ids: number[];
  original_title: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  favorite: boolean;
}
