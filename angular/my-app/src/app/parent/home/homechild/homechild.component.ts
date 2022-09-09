import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-homechild',
  templateUrl: './homechild.component.html',
  styleUrls: ['./homechild.component.scss']
})
export class HomechildComponent implements OnInit {

  constructor() { }
  @Input() inputFromParent ="";

  ngOnInit(): void {

  }

  @Output() userlist= new EventEmitter<string>();
   addNewItem(value: string) {
           this.userlist.emit(value);
            }

}
