import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';


@NgModule({
  declarations: [
    TimePipe,
    NumberWithCommasPipe,
  ],
  exports: [
    TimePipe,
    NumberWithCommasPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule {}
