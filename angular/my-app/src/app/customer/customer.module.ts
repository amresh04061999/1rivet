import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './componet/customer-form/customer-form.component';
import { CustomerListComponent } from './componet/customer-list/customer-list.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
