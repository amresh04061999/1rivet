import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
     RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
