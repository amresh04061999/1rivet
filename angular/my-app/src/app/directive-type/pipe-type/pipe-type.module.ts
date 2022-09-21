import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeTypeRoutingModule } from './pipe-type-routing.module';
import { PipeTypeComponent } from './pipe-type.component';


@NgModule({
  declarations: [
    PipeTypeComponent
  ],
  imports: [
    CommonModule,
    PipeTypeRoutingModule
  ]
})
export class PipeTypeModule { }
