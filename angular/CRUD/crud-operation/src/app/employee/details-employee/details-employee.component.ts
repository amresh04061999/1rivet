import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employee } from '../model/employee.model';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent implements OnInit {
  public id: Number;
  public showDeails: employee

  constructor(
    private employeeservices: EmployeeServiceService,
    private route: ActivatedRoute

  ) {
    this.showDeails = new employee
    this.id = 0
    this.route.params.subscribe(res => {
      this.id = res['id']
      if (this.id) {
        this.employeGetById()
      }
    })

  }
  ngOnInit(): void {
  }
  public employeGetById() {
    this.employeeservices.getemployeeByID(this.id).subscribe((Response: employee) => {
      this.showDeails = Response

    })
  }

}
