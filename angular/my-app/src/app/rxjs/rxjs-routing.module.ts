import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviouralSubjectComponent } from './behavioural-subject/behavioural-subject.component';
import { FormEventComponent } from './form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { ObservableComponent } from './observable/observable.component';
import { FromComponent } from './operator-type/from/from.component';
import { MapComponent } from './operator-type/map/map.component';
import { OfComponent } from './operator-type/of/of.component';
import { TimerComponent } from './operator-type/timer/timer.component';
import { ToarrayComponent } from './operator-type/toarray/toarray.component';
import { PrommissComponent } from './prommiss/prommiss.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

import { RxjsMainComponent } from './rxjs-main/rxjs-main.component';
import { RxjsComponent } from './rxjs.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [{ path: '', component: RxjsComponent,
children:[

  {
   path:'',
   redirectTo:'rxjs-main',
   pathMatch:'full'
  },

  {
     path:'rxjs-main',component:RxjsMainComponent
  },
{
  path:'observable',component:ObservableComponent
},
{
  path:'subject',component:SubjectComponent
},
{
  path:'behavioural',component:BehaviouralSubjectComponent
},
{
  path:'replay',component:ReplaySubjectComponent
},
{
  path:'async',component:AsyncSubjectComponent
},

{
  path:'promiss',component:PrommissComponent
},
{
  path:'formEvent',component:FormEventComponent
},
{
  path:'interval',component:IntervalComponent
},
{
  path:'timer',component:TimerComponent
},
{
  path:'of',component:OfComponent
},
{
  path:'from',component:FromComponent
},
{
  path:'toarray',component:ToarrayComponent
},
{
  path:'map',component:MapComponent
},
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
