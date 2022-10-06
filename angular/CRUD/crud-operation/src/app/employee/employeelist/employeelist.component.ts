import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../model/employee.model';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {


  @Input() employee: employee[]
  constructor(

    private employeeservices: EmployeeServiceService,
    private router: Router
  ) {
    this.employee = []
  }

  ngOnInit(): void {
    this.getEmploye()
  }
  // Delete employee
  public onDelete(id: any) {
    this.employeeservices.employeeDelete(id).subscribe((Response) => {
      this.getEmploye()
    })
  }
  public getEmploye() {
    this.employeeservices.getemployee().subscribe((Response) => {
      this.employee = Response
    })
  }
  // edite employee
  public editeEmploye(emoloye: employee) {
    this.router.navigate(['employee/edit', emoloye.id])
  }
  // show Details
  public employedetails(list: employee) {
    this.router.navigate(['employee/detail', list.id])
  }
}
