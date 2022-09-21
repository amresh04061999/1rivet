import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpoloyeeRoutingModule } from './empoloyee-routing.module';
import { EmpoloyeeComponent } from './empoloyee.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeedetailsComponent } from './component/employeedetails/employeedetails.component';



@NgModule({
  declarations: [
    EmpoloyeeComponent,
    EmployeeFormComponent,
    EmployeelistComponent,
    EmployeedetailsComponent
  ],
  imports: [
    CommonModule,
    EmpoloyeeRoutingModule,
    ReactiveFormsModule,



  ],
  exports:[
    EmployeeFormComponent,
    EmployeelistComponent,
    EmployeedetailsComponent
  ]

})
export class EmpoloyeeModule { }
