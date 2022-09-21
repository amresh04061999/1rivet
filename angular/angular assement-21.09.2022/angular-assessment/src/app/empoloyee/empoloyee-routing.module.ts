import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeedetailsComponent } from './component/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { EmpoloyeeComponent } from './empoloyee.component';

const routes: Routes = [
  { path: '', component: EmpoloyeeComponent,


  children:[
    {
      path:'',
      pathMatch:'full',
      redirectTo:'form'
    },
    {
      path:'form',component:EmployeeFormComponent
    },
    {
      path:'formlist',component:EmployeelistComponent
    },
    {
      path:'dtails',component:EmployeedetailsComponent
    },
  ]

},
{
  path: 'edit/:employeid',
  component: EmployeeFormComponent,
},
{
  path: ':employeid',
  component: EmployeeFormComponent,
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpoloyeeRoutingModule { }
