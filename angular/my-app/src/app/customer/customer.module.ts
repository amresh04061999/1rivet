import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './componet/customer-form/customer-form.component';
import { CustomerListComponent } from './componet/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { PipeTypeModule } from '../pipe-type/pipe-type.module';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    // PipeTypeModule
  ]
})
export class CustomerModule { }
