import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { DesignUtilityServicesService } from './design-utility-services.service';
import { SubjectComponent } from './subject/subject.component';
import { BehaviouralSubjectComponent } from './behavioural-subject/behavioural-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';

import { RxjsMainComponent } from './rxjs-main/rxjs-main.component';
import { PrommissComponent } from './prommiss/prommiss.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { FormEventComponent } from './form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './operator-type/timer/timer.component';
import { OfComponent } from './operator-type/of/of.component';
import { FromComponent } from './operator-type/from/from.component';
import { ToarrayComponent } from './operator-type/toarray/toarray.component';


@NgModule({
  declarations: [
    RxjsComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviouralSubjectComponent,
    AsyncSubjectComponent,
    RxjsMainComponent,
    PrommissComponent,
    ReplaySubjectComponent,
    FormEventComponent,
    IntervalComponent,
    TimerComponent,
    OfComponent,
    FromComponent,
    ToarrayComponent
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
