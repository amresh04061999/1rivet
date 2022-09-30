import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  // subject
  public subject = new Subject();
  public person1: any;
  public person2: any;
  public status: any;
  public status2: any;
  constructor(private design: DesignUtilityServicesService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.person1 = this.subject.subscribe({
      next: (value) => {
        this.design.print(value, 'elcontainer');
      },
      error: (error) => {
        // console.log(error);
        this.status = 'error';
      },
      complete: () => {
        // console.log('completed');
        this.status = 'completed';
      },
    });
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    //this.subject.error('error');
    this.subject.next(4);

    // subscriber
    this.person2 = this.subject.subscribe({
      next: (value) => {
        this.design.print(value, 'elcontainer1');
      },
      error: (error) => {
        console.log(error);
        this.status2 = 'error';
      },
      complete: () => {
        // console.log('complete');
        this.status2 = 'completed';
      },
    });
    this.subject.next(5);
    // this.subject.complete()
    this.subject.next(6);
  }
}
