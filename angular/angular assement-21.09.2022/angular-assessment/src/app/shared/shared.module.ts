import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RupesPipe } from './rupes.pipe';



@NgModule({
  declarations: [
    RupesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RupesPipe
  ]
})
export class SharedModule { }
