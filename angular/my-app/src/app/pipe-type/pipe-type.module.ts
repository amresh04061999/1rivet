import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeTypeRoutingModule } from './pipe-type-routing.module';
import { PipeTypeComponent } from './pipe-type.component';
import { TrimPipe } from './custome/trim.pipe';


@NgModule({
  declarations: [
    PipeTypeComponent,
    TrimPipe
  ],
  imports: [
    CommonModule,
    PipeTypeRoutingModule
  ]
})
export class PipeTypeModule { }
