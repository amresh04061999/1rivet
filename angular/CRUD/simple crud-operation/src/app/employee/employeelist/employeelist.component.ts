import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification/notification.service';
import { employee } from '../model/employee.model';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
})
export class EmployeelistComponent implements OnInit {
  @Input() employee: employee[];
  public search = '';
  constructor(
    private employeeservices: EmployeeServiceService,
    private router: Router,
    private toaster: NotificationService
  ) {
    this.employee = [];
  }
  ngOnInit(): void {
    this.getEmploye();
  }
  users = [
    {
      id: '123',
      email: 'abc@gmail.com',
    },
    {
      id: '1234',
      email: 'xyz@hotmail.com',
    },
    {
      id: '12345',
      email: 'jsgsbh@kk.com',
    },
    {
      id: '123456',
      email: 'test@gmail.com',
    },
  ];
  // Delete employee
  public onDelete(id: any) {
    this.employeeservices.employeeDelete(id).subscribe((Response) => {
      this.toaster.showSuccess('Delete successfull delete', 'delete');
      this.getEmploye();
    });
  }
  public getEmploye() {
    this.employeeservices.getemployee().subscribe((Response) => {
      this.employee = Response;
    });
  }
  // edite employee
  public editeEmploye(emoloye: employee) {
    this.router.navigate(['employee/edit', emoloye.id]);
  }
  // show Details
  public employedetails(list: employee) {
    this.router.navigate(['employee/detail', list.id]);
  }
}
