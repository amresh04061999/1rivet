import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [{ path: '', component: RxjsComponent,
children:[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'observable'
  },
{
  path:'observable',component:ObservableComponent
}

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
