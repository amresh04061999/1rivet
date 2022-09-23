import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public EmployeForm:FormGroup;
  public submitted = false;
  Employe:any=[];
  employeid:any;
  constructor(
    private router:Router,
    private activaterouter:ActivatedRoute,
    private formbuilder:FormBuilder
  ) {
    this.EmployeForm=this.formbuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      gender:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      salary:['',[Validators.required,Validators.pattern(/^[0-9]+$/)]],
      date:['',[Validators.required]],

    })
    this.employeid=this.activaterouter.snapshot.params['employeid'];
    console.log(this.employeid);

  }
  // select data employe form
  get employe(): { [key: string]: AbstractControl } {
    return this.EmployeForm.controls;
  }

  ngOnInit(): void {
  }
// reset a data
public reset(): void {
  this.EmployeForm.reset();
}
// add a data
  onSubmit(){
debugger
    this.submitted = true;
    if (this.EmployeForm.valid){
      this.Employe.push(this.EmployeForm.value);
      // this.submitted = false;
    }
  //  this.reset()
  //  this.submitted = false;
    this.EmployeForm.reset();

  }
// edite function
  editemploye(item:any){
    this.EmployeForm.patchValue(item);

  }
}

