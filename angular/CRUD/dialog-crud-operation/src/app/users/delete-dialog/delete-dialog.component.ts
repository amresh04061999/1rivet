import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  delete(Crossclick: any) {}
  cancel(yes: any) {}
}
