import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';
import {MovieDetail} from '../models/movie-detail';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  movies: Movie[] = [];

  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '515eb94911f48abaae7c7c17ba989394';
  baseImgUrl = 'https://image.tmdb.org/t/p/';
  language = 'en-US';
  region = 'US';

  constructor(private http: HttpClient) {}

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
  }

  getTopRatedMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getMovie(id: number) {
    return this.http.get<MovieDetail>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }
}
