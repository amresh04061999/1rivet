import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  public subject = new ReplaySubject(3);
  public status: any;
  public status2: any;
  public person1: any;
  public person2: any;

  constructor(private design: DesignUtilityServicesService) {}

  ngOnInit(): void {
    this.person1 = this.subject.subscribe({
      next: (message) => {
        this.design.print(message, 'elcontainer');
      },
      error: () => {
        this.status = 'error';
      },
      complete: () => {
        this.status = 'completed';
      },
    });

    this.subject.next(1)
    this.subject.next(2)
    this.subject.complete()
    this.subject.next(3)

    this.subject.next(4)
    this.subject.next(5)
    // this.subject.complete()
    this.person2 = this.subject.subscribe({
      next: (message) => {
        this.design.print(message, 'elcontainer1');
      },
      error: () => {
        this.status2 = 'error';
      },
      complete: () => {
        this.status2 = 'completed';
      },
    });
    this.subject.next(6)
    this.subject.next(7)
  }
}
