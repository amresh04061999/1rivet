import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {

  public employeeForm:FormGroup;
  public issubmited:false;
  constructor(private formbuilder:FormBuilder) {
         
    this.issubmited=false;
    // form builder
    this.employeeForm=this.formbuilder.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      phoneno:['',[Validators.required]],
      email:['',[Validators.required]],

    })

   }

  ngOnInit(): void {

  }
  // function geter or setter
  get validator():{[key:string]:AbstractControl<any>}{
  return this.employeeForm.controls

  }
  public save(){
    console.log(this.employeeForm)
    // this.issubmited=true
  }


}
