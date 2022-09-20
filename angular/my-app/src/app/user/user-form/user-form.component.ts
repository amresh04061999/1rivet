import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userform:FormGroup;
   public submitted = false;


  constructor(
    private formbuilder:FormBuilder
  ) {
    this.userform=this.formbuilder.group({
      firstname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[A-Za-z]+$/)]],
      lastname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9+.-]+@(.+)$')]],
      password:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required]],
      check:['',[Validators.required]]
    })

    // pattern('^[A-Za-z0-9+.-]+@(.+)$')]


    // this.userform = new FormGroup({
    //   firstname: new FormControl('',[Validators.required]),
    //   lastname: new FormControl('',[Validators.required]),
    //   email: new FormControl('',[Validators.required]),
    //   password:new FormControl('',[Validators.required]),
    //   address:new FormControl('',[Validators.required]),
    //   city:new FormControl('',[Validators.required]),
    //   state:new FormControl('',[Validators.required]),
    //   pincode:new FormControl('',[Validators.required]),
    //   check:new FormControl('',[Validators.required])
    // });
   }
   get user(): { [key: string]: AbstractControl } {
    return this.userform.controls;
  }

  ngOnInit(): void {
  }



  onSubmit(){
    this.submitted = true;
    console.log(this.userform)
    console.log(this.formbuilder)

  }
  public reset(): void {
    this.userform.reset();
  }
}
