import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../srvices/user.service';
import { user } from '../user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  public userlist: user[];
  constructor(
    public dialog: MatDialog,
    private userservices: UserService,
    private activaterouter: ActivatedRoute,
    private router: Router
  ) {
    this.userlist = [];
  }

  ngOnInit(): void {
    this.getuser();
  }

  // Open dilog Box
  adduser() {
    this.dialog
      .open(DialogComponent, {})
      .afterClosed()
      .subscribe((value) => {
        if (value === 'save') {
          this.getuser();
        }
      });
  }

  // edit user  and pass object in dilog box / open dialog box
  public editUser(users: user) {
    // this.router.navigate(['user/edit/' + users.id])
    this.dialog
      .open(DialogComponent, {
        data: users,
      })
      .afterClosed()
      .subscribe((value) => {
        if (value === 'update') {
          this.getuser();
        }
      });
  }

  //  Delete user
  public onDelete(id: any) {
    this.userservices.deleteUser(id).subscribe({
      next: (value) => {
        this.dialog.open(DeleteDialogComponent, {});
      },
      error: (res) => {
        alert('fail');
      },

      complete: () => {},
    });
  }
  // get user list
  public getuser() {
    this.userservices.getuser().subscribe({
      next: (res) => {
        this.userlist = res;
        console.log(res);
      },
      error: (res) => {
        alert('fail');
      },
      complete: () => {
        // alert('success')
      },
    });
  }
}
