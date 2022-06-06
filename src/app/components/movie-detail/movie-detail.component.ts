import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public id: number;
  public video: boolean;
  movie: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  relatedvideo: any;
  casts: any = [];
  backdrops: any = [];
  responsiveOptions;


  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getSingleMoviesDetails(this.id);
      this.getBackropsImages(this.id);
    });
  }

  getSingleMoviesDetails(id){
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
    });
  }

  getBackropsImages(id) {
    this.movieService.getBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
    });
  }
}
