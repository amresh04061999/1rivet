import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviouralSubjectComponent } from './behavioural-subject/behavioural-subject.component';
import { ObservableComponent } from './observable/observable.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RxjsComponent } from './rxjs.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [{ path: '', component: RxjsComponent,
children:[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'observable'
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
  path:'async',component:AsyncSubjectComponent
},
{
  path:'reply',component:ReplaySubjectComponent
},
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
