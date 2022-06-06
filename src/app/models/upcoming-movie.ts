import {Movie} from './movie';

export interface UpcomingMovie {
  page: number;
  results: Movie;
  total_results: number;
  dates: { maximum: string; minimum: string};
  total_pages: number;
}
