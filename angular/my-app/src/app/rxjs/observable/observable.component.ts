import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, observable, Observable, Subscriber, Subscription } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy{
  public status: any;
  public status2: any;
  public namestatus:any;
  public unsub: Subscription;
  public persone:any;
  public name:any
  constructor(private services: DesignUtilityServicesService) {
    this.unsub = new Subscription();
  }

  ngOnInit(): void {
    // prommise
    // const promiss=new Promise(resolve =>{
    //   console.log('this is call without call then')
    //    setTimeout(() => {
    //     resolve(' promiss work') // only single value return
    //   }, 1000);
    // })
    // promiss.then( x =>{
    //   console.log(x)
    // })

    // observable example 1 manual
    const custtom1$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next('java');
      }, 1000);
      setTimeout(() => {
        observer.next('json');
      }, 2000);
      setTimeout(() => {
        observer.next('angular');
        observer.complete();
        // this.status='completed'
      }, 3000);
      setTimeout(() => {
        observer.next('javascript');
        observer.error('limit exceed');
        //  this.status='error'
      }, 4000);
      setTimeout(() => {
        observer.next('jquery');

        // compelete  its only print 3 data
      }, 5000);
      setTimeout(() => {
        observer.next('jquery');

        // compelete  its only print 3 data
      }, 5000);
      setTimeout(() => {
        observer.next('jquery');

        // compelete  its only print 3 data
      }, 5000);
      setTimeout(() => {
        observer.next('jquery');

        // compelete  its only print 3 data
      }, 5000);
    });

    const person1 = custtom1$.subscribe(
      (Response) => {
        // console.log(Response)
        this.services.print(Response, 'elcontainer');
      },
      (error) => {
        this.status = 'error';
      },
      () => {
        this.status = 'completed';
      }
    );

    // Subscriber(data, error  completion)

    // observable example 3  custome interval
   const arraydata=['java','javascript','angular','']
    const custtom2$ = new Observable((sub) => {
     let count =0;
      setInterval(() => {
        sub.next(arraydata[count]);
        if(count>=2){
              sub.complete()
        }
        count ++;
      }, 1000);

    });

    this.persone = custtom2$.subscribe((Response) => {
      this.services.print(Response, 'elcontainer1');
    },(error) => {
      this.status2 = 'error';
    },
    () => {
      this.status2 = 'completed';
    }
    );

  // example 3 (random names)
  const array1=['amresh','shakher','sharma','ramesh','mahesh','rahul']
    const custtom3$ = new Observable((sub) => {
     let count =0;
      setInterval(() => {
        sub.next(array1[count]);
        if(count>=3){
          sub.error();
        }
        if(count>=5){
          sub.complete();
        }
        count ++;
      }, 1000);

    });

    custtom3$.subscribe({
      next:(message)=>{
      this.name=message
      },
      error:()=>{
        this.namestatus='error';
        console.log('error')
      },
      complete:()=>{
        this.namestatus='completed';
      }

    })
  }
  ngOnDestroy(): void {
   this.unsub.unsubscribe()

}

// observable stream create
// -- user input(button click event)
//-- http Request
//-- array
//--object
//etc

// Observable handel(subscribe)
//--next(data);
//-- error
//-- completion




}

