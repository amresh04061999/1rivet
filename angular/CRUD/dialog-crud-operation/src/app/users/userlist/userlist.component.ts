import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  adduser() {
    this.dialog.open(DialogComponent);
  }
}
