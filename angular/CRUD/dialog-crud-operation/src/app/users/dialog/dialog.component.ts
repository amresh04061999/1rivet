import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../srvices/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  userform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userservices: UserService,
    private router: Router
  ) {
    this.userform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public adduser() {
    this.userservices.adduser(this.userform.value).subscribe((res: user) => {
      console.log(res);
      this.reset();
      this.router.navigate(['users/list']);
    });
  }

  public reset() {
    this.userform.reset();
  }
}
