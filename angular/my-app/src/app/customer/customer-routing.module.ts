import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from '../employee/employee-form/employee-form.component';
import { CustomerFormComponent } from './componet/customer-form/customer-form.component';
import { CustomerListComponent } from './componet/customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [

  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customerlist',
      },
      { path: 'customerlist', component: CustomerListComponent
    },
      { path: 'customerform', component: CustomerFormComponent },
    ],
  },

  {
    path: 'add',
    component: CustomerFormComponent,
  },
  {
    path: 'edit/:name',
    component: CustomerFormComponent,
  },
  {
    path: 'exit',
    component: CustomerListComponent,
  },
  {
    path: ':name',
    component: CustomerListComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
