import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from './services/employee-service.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from '../notification/notification.service'
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeformComponent,
    EmployeelistComponent,
    DetailsEmployeeComponent,

  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    EmployeeServiceService,
    NotificationService
  ]

})
export class EmployeeModule { }
