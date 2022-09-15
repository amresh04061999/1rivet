import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './componet/customer-form/customer-form.component';
import { CustomerListComponent } from './componet/customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [

  {
path:'',
pathMatch:'full',
redirectTo:'customerlist'
  },
  { path: '', component: CustomerComponent ,
     children:[
      { path: 'customerlist', component: CustomerListComponent },
     {  path: 'customerform', component: CustomerFormComponent }

    ]},

    {
      path:'add',component:CustomerFormComponent,
    },
    {
      path:'edit/:customerid',component:CustomerFormComponent,
    },

    {
      path:'exit',component:CustomerComponent,
    },
    {
      path:':customerid',component:CustomerListComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
