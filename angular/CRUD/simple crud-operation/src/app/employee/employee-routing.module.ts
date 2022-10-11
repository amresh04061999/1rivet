import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent,
    children: [

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form'
      },

      {
        path: 'form', component: EmployeeformComponent
      },
      {
        path: 'edit/:id', component: EmployeeformComponent
      },
      {
        path: 'detail/:id', component: DetailsEmployeeComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
