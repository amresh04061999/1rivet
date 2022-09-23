import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { users } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userform:FormGroup;
   public submitted = false;
  public users:users[];
  res:any;
  private  id:string

  constructor(
    private formbuilder:FormBuilder,
    private userservice:UserService,
    private activatedRoute:ActivatedRoute
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
    this.id=''
    this.users=[]
    this.activatedRoute.params.subscribe((res:any)=>{
      this.id=res.id
      this.getUserById();
    })
   }
   get user(): { [key: string]: AbstractControl } {
    return this.userform.controls;
  }

  ngOnInit(): void {
    this.getuserDetails();
  }
// get user details and show
  getuserDetails():void{
      this.userservice.getuser().subscribe((result)=>{
        this.users=result
        // console.log(this.users);

      })
    }
    //  submit data in
  onSubmit():void{
    this.submitted = true;
    if(this.userform.valid){
      if(this.id){
        this.userservice.editUser(this.userform.value,Number(this.id)).subscribe((Response)=>{
        this.getuserDetails()
        })
      }
      else{
        this.userservice.adduser(this.userform.value).subscribe((Response)=>{
          this.res=Response
         //  console.log(this.res);
          this.getuserDetails();
           })

      }

    }
  }
  public reset(): void {
    this.userform.reset();
  }

  getUserById(){
    this.userservice.getuserByID(Number(this.id)).subscribe((Response:users)=>{
           this.userform.patchValue(Response)
    })
  }






}
