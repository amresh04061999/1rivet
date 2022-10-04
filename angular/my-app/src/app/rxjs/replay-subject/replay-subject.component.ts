import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  public status:any;
  public status2:any;
  public person1:any;
  public persone2:any;
    public subject =new ReplaySubject(3)
  constructor( private desing:DesignUtilityServicesService) { }

  ngOnInit(): void {
    this.person1=this.subject.subscribe({
      next:(value)=>{
         this.desing.print(value,'elcontainer')
      },
      error: () => {
        this.status = 'error';
      },
      complete: () => {
        this.status = 'completed';
      },
    })
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
    this.person1=this.subject.subscribe({
      next:(value)=>{
         this.desing.print(value,'elcontainer1')
      },
      error: () => {
        this.status2 = 'error';
      },
      complete: () => {
        this.status2 = 'completed';
      },
    })
  }


}
