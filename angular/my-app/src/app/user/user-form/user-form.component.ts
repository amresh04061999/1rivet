import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userform: FormGroup;
 public  submitted = false;


  constructor(
    private formbuilder:FormBuilder
  ) {
    this.userform = new FormGroup({
      fullname: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      
    });
   }

  ngOnInit(): void {
    this.userform=this.formbuilder.group({
      firstname: ['', Validators.required],
      
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.userform.controls;
  }

  onSubmit(){
    this.submitted = false;
    
    

  }
}
