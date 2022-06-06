import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailComponent} from './movie-detail.component';
import {MovieDetailRoutingModule} from './movie-detail-routing.module';
import {PipeModule} from '../../pipe/pipe.module';



@NgModule({
  declarations: [
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    PipeModule
  ],

})
export class MovieDetailsModule { }
