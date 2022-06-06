import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './components/movie/movie.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieComponent,
    loadChildren: () => import('./components/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'movies/:id', loadChildren: () => import('./components/movie-detail/movie-detail.module').then(m => m.MovieDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
