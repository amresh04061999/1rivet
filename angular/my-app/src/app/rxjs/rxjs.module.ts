import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { DesignUtilityServicesService } from './design-utility-services.service';


@NgModule({
  declarations: [
    RxjsComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  providers:[
    DesignUtilityServicesService
  ]
})
export class RxjsModule { }
