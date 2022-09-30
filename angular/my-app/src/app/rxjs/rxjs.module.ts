import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { DesignUtilityServicesService } from './design-utility-services.service';
import { SubjectComponent } from './subject/subject.component';
import { BehaviouralSubjectComponent } from './behavioural-subject/behavioural-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';


@NgModule({
  declarations: [
    RxjsComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviouralSubjectComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent
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
