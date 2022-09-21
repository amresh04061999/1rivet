import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpoloyeeRoutingModule } from './empoloyee-routing.module';
import { EmpoloyeeComponent } from './empoloyee.component';


@NgModule({
  declarations: [
    EmpoloyeeComponent
  ],
  imports: [
    CommonModule,
    EmpoloyeeRoutingModule
  ]
})
export class EmpoloyeeModule { }
