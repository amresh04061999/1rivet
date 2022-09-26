import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/user/model/user.model';
import { employee } from '../model/employee.model';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
   public empoyeeform:FormGroup;
   public issubmited:any;
    public  id:any
    public title:any
    public employeeid:any
  constructor(
    private FormBuilder:FormBuilder,
    private employeeservices:EmployeeserviceService,
    private route:Router,
    private activaterouter:ActivatedRoute
  ) {
    this.issubmited=false;
     this.empoyeeform=this.FormBuilder.group({
      firstname:['',[Validators.required,Validators.minLength(3)]],
      lastname:['',[Validators.required]],
      phoneno:['',[Validators.required]],
      email:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required]],
     });


       //  get using routing to get id
       this.id=this.activaterouter.snapshot.params['id'];

   this.activaterouter.params.subscribe((res)=>{
    this.employeeid=res['id'];
    if(this.employeeid){
      this.getUserById();
    }

   })

  }
  get employee(): { [key: string]: AbstractControl } {
    return this.empoyeeform.controls;
  }
  ngOnInit(): void {
    this.title="Add Employee";
    this.title=this.id?'Edit Employee':'Add Employee';
  }
// add employee function
   onsubmited(){
    this.issubmited=true;
    if(this.empoyeeform.valid){

      if(this.employeeid){
        this.editesubmited();
      }else{
        this.employeeservices.addEmployee(this.empoyeeform.value).subscribe((Response)=>{
          this.route.navigate(['employee/emloyeeList']);
      });

      }

    }
  }
  reset(){
    this.empoyeeform.reset();
  }
  editesubmited(){
    if(this.empoyeeform.valid){
      if(this.employeeid){
        this.employeeservices.editeEmployeee(this.empoyeeform.value,Number(this.employeeid)).subscribe((Response)=>{
          this.route.navigate(['employee/emloyeeList']);
        })
      }
    }
  }


  getUserById(){
    this.employeeservices.getEmployeeId(Number(this.employeeid)).subscribe((Response)=>{
           this.empoyeeform.patchValue(Response)
          // console.log(Response)
    })
  }
 }
