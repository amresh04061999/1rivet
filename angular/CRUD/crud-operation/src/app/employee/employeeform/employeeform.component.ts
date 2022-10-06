import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/notification/notification.service';
import { employee } from '../model/employee.model';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {

  public employeeForm: FormGroup;
  public issubmited=false;
  public employeelist: any
  public id: any
  constructor(private formbuilder: FormBuilder,
    private employeesevices: EmployeeServiceService,
    private router: ActivatedRoute,
    private route:Router,
    private toastrService: ToastrService

  ) {
    // this.issubmited = false;
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
    this.issubmited=true
      if (this.employeeForm.valid) {
      
          if (this.id) 
          {
        this.employeesevices.editemployee(this.employeeForm.value, this.id).subscribe(Response => {
          this.getEmployee();
          this.employeeForm.reset();
          this.route.navigate(['employee/form'])
          this.toastrService.success('edite data sucessfull','update')
        })
      } else {
        this.employeesevices.addEmployee(this.employeeForm.value).subscribe((Response: employee[]) => {
          this.toastrService.success('add data sucessfull','add')
          this.getEmployee()
         
        })
      }

    } 
    
    else {
      console.log('form is invalid');
    }
  
  }

  public reset(){
    this.employeeForm.reset()

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
