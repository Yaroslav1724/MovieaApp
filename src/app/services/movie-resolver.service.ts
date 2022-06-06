import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MovieDetail} from '../models/movie-detail';
import {MovieService} from './movie.service';

@Injectable({
  providedIn: 'root'
})

export class MovieResolverService {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetail> | Promise<MovieDetail> | MovieDetail {
    return this.movieService.getMovie(+route.params.id);
  }
}
