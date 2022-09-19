import { NgClass } from '@angular/common';
import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModelComponent } from './attribute/ng-model/ng-model.component';
import { NgStyleComponent } from './attribute/ng-style/ng-style.component';
import { NgclassComponent } from './attribute/ngclass/ngclass.component';
import { DirectiveTypeComponent } from './directive-type.component';
const routes: Routes = [
  {
    path: '',
    component: DirectiveTypeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ngclass',
      },
    { path: 'ngclass', component: NgclassComponent },
    { path: 'ngstyle', component: NgStyleComponent },
    { path: 'ngmodel', component: NgModelComponent },
  ]

}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveTypeRoutingModule { }
