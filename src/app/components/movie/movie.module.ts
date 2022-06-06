import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
  ],
  declarations: [
    MovieComponent,
  ]
})
export class MovieModule {}
