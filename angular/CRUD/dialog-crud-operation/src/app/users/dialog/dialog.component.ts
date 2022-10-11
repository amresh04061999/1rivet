import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../srvices/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  userform: FormGroup;
  public id: any;

  public action: string = 'save';
  constructor(
    @Inject(MAT_DIALOG_DATA) public editedata: user,
    private fb: FormBuilder,
    private userservices: UserService,
    private router: ActivatedRoute,
    private dilog: MatDialogRef<DialogComponent>
  ) {
    this.userform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // console.log(this.id);

    // console.log(this.editedata)

    if (this.editedata) {
      this.action = 'update';
      this.userform.controls['firstname'].patchValue(this.editedata.firstname);
      this.userform.controls['lastname'].patchValue(this.editedata.lastname);
      this.userform.controls['phoneno'].patchValue(this.editedata.phoneno);
      this.userform.controls['email'].patchValue(this.editedata.email);
      this.userform.controls['password'].patchValue(this.editedata.password);
    }
    // console.log(this.editedata.id)
  }

  ngOnInit(): void {}

  public saveUser() {
    if (!this.editedata) {
      if (this.userform.valid) {
        this.userservices.adduser(this.userform.value).subscribe({
          next: (value) => {
            // console.log(value);
            this.dilog.close('save');
            this.reset();
          },
          error: (error) => {},
          complete: () => {
            alert('Add user successfully ');
          },
        });
      }
    } else {
      this.edituser();
    }
  }

  public edituser() {
    this.userservices
      .updateUser(this.userform.value, Number(this.editedata.id))
      .subscribe({
        next: (value) => {
          // console.log(value);
          this.dilog.close('update');
          this.reset();
        },
        error: (error) => {},
        complete: () => {
          alert('Edit user successfully ');
        },
      });
  }

  // reset form
  public reset() {
    this.userform.reset();
  }
}
