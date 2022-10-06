import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { employee } from '../model/employee.model';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {

  public employeeForm: FormGroup;
  public issubmited: false;
  public employeelist: any
  public id: any
  constructor(private formbuilder: FormBuilder,
    private employeesevices: EmployeeServiceService,
    private router: ActivatedRoute

  ) {
    this.issubmited = false;
    // form builder
    this.employeeForm = this.formbuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
    // get id
    this.router.params.subscribe(param => {
      this.id = param['id'];
      if (this.id) {
        this.getemployebyid()
      }
    })
  }

  ngOnInit(): void {
    this.getEmployee()
  }
  // function geter
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.employeeForm.controls
  }

  // add function
  public save() {
    if (this.employeeForm.valid) {
      if (this.id) {
        this.employeesevices.editemployee(this.employeeForm.value, this.id).subscribe(Response => {
          this.getEmployee();
        })
      } else {
        this.employeesevices.addEmployee(this.employeeForm.value).subscribe((Response: employee[]) => {
          this.getEmployee()
        })
      }

    } else {
      console.log('form is invalid');

    }

  }
  // getdata
  public getEmployee() {
    this.employeesevices.getemployee().subscribe((Response) => {
      this.employeelist = Response

    })
  }

  public getemployebyid() {
    this.employeesevices.getemployeeByID(this.id).subscribe((Response: employee[]) => {
      this.employeeForm.patchValue(Response)
    })

  }


}
