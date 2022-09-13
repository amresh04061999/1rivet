import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() userlist:any;

  constructor(private titleService: Title){
    this.titleService.setTitle("myapp home");
    this.userlist=["amresh","prasad"];
  }

  //child to parent
  addItem(newItem: string) {
    this.userlist.push(newItem);
  }
  ondelete(){
    this.userlist.pop();
  }

  ngOnInit(): void {
  }

}
