import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  public subject =new AsyncSubject()

  public status:any;
  public status2:any;
  person1:any;
  person2:any;

  
  constructor(
    private _design:DesignUtilityServicesService
  ) { }

  ngOnInit(): void {
  this.person1=this.subject.subscribe({
    next:(message)=>{
    this._design.print(message,'elcontainer');
    },
    error:()=>{
      this.status='arror'
      },
      complete:()=>{
        this.status='completed'
        }
           })
           this.subject.next(1);
           this.subject.next(2);
           this.subject.next(3);
           this.subject.next(4);
           

           this.person2=this.subject.subscribe({
            next:(message)=>{
            this._design.print(message,'elcontainer1');
            },
            error:()=>{
              this.status2='arror'
              },
              complete:()=>{
                this.status2='completed'
                }
                   })
                   this.subject.next(1);
                   this.subject.next(2);
                   this.subject.next(3);
                   this.subject.complete()
                   this.subject.next(4);
  }
 
}
