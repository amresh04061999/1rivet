import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from './services/employee-service.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from '../notification/notification.service';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeformComponent,
    EmployeelistComponent,
    DetailsEmployeeComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmployeeServiceService, NotificationService],
})
export class EmployeeModule {}
