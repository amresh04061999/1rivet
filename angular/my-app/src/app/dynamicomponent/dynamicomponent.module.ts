import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicomponentRoutingModule } from './dynamicomponent-routing.module';
import { DynamicomponentComponent } from './dynamicomponent.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { WatchComponent } from './watch/watch.component';
import { OvenComponent } from './oven/oven.component';


@NgModule({
  declarations: [
    DynamicomponentComponent,
    DynamicComponent,
    MobileComponent,
    LaptopComponent,
    WatchComponent,
    OvenComponent
  ],
  imports: [
    CommonModule,
    DynamicomponentRoutingModule
  ]
})
export class DynamicomponentModule { }
