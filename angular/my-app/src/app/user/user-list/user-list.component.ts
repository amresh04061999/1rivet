import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/user/model/user.model';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: users[]
  constructor(
    private userservice: UserService,
    private route:Router
  ) {
    this.users = [ ];
  }
  ngOnInit(): void {
  }

  // get user
  getuser(): void {
    this.userservice.getuser().subscribe((result: users[]) => {
      this.users = result
      console.log(this.users);

    })
  }
  
  // delete user data in json server
  public onDelete(id: any) {
    this.userservice.deleteUser(id).subscribe((result) => {
      // debugger
      this.getuser();
    })
  }

  // Edite data in user in json
  onEdite(id: any) {
        this.route.navigate(['user/edit',+ id])
  }

}
