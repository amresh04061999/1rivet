import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-behavioural-subject',
  templateUrl: './behavioural-subject.component.html',
  styleUrls: ['./behavioural-subject.component.scss'],
})
export class BehaviouralSubjectComponent implements OnInit {
  public subject = new BehaviorSubject(0);
  status: any;
  status2: any;
  person1: any;
  person2: any;
  constructor(private design: DesignUtilityServicesService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.subject.next(34);
    this.subject.next(34);
    this.subject.next(34);
    this.subject.next(34);
    this.subject.next(34);
    this.subject.next(34);
    this.subject.next(34);
    this.subject.next(35); // new person give only first video
    this.person1 = this.subject.subscribe({
      next: (msg) => {
        this.design.print(msg, 'elcontainer');
      },
      error: () => {
        this.status = 'error';
      },
      complete: () => {
        this.status = 'completed';
      },
    });

    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
    // this.subject.error('')
    // this.subject.complete()
    this.subject.next(5);

    this.person2 = this.subject.subscribe({
      next: (msg) => {
        this.design.print(msg, 'elcontainer1');
      },
      error: () => {
        this.status2 = 'error';
      },
      complete: () => {
        this.status2 = 'completed';
      },
    });

    this.subject.next(6);
    this.subject.next(7);
    this.subject.next(8);
    this.subject.complete();
    this.subject.next(9);
  }
}
