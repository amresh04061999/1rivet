import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscriber, Subscription } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{

  public status:any
  public sub:Subscription
  constructor(
    private  services:DesignUtilityServicesService

  ) {

this.sub= new Subscription()
  }



  ngOnInit(): void {


        // observable example 1 manual
        const custtom1$= new Observable(observer=>{
          setTimeout(() => {
            observer.next('java')
          }, 1000);
          setTimeout(() => {
            observer.next('json')
          }, 2000);
          setTimeout(() => {
            observer.next('angular')
            observer.complete()
            // this.status='completed'

          }, 3000);
          setTimeout(() => {
            observer.next('javascript');
             observer.error('limit exceed')
            //  this.status='error'
          }, 4000);
          setTimeout(() => {
            observer.next('jquery')

            // compelete  its only print 3 data
          }, 5000);
          setTimeout(() => {
            observer.next('jquery')

            // compelete  its only print 3 data
          }, 5000);
          setTimeout(() => {
            observer.next('jquery')

            // compelete  its only print 3 data
          }, 5000);
           setTimeout(() => {
            observer.next('jquery')

            // compelete  its only print 3 data
          }, 5000);

        })

       const person1= custtom1$.subscribe(Response=>{
          // console.log(Response)
          this.services.print(Response,'elcontainer1')
        },
        (error)=>{
          this.status='error'

        },
          ()=>{
            this.status='completed'
          }

        )

    // Subscriber(data, error  completion)

 // observable example 1  custome interval
const custtom2$= new Observable(sub =>{
  setInterval(()=>{
           sub.next('hello');
  },100)
})

const persone=custtom2$.subscribe(Response =>{
  console.log(Response)
})


    // this.observable$=new Observable((obse1)=>{
    //           this.obse1.next(10);
    //           this.obse1.next(550);
    //           this.obse1.next(15);
    //           this.obse1.next(10);
    //           this.obse1.next(18);
    //           if(3>5){
    //             obse1.error('error')
    //           }
    //           else{
    //             obse1.complete()

    //           }
    //         })
    //  }


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

    // Observable
    // const observer$ = new Observable(sub => {
    //   console.log('this is call  using subscribe mathod')

    //   setTimeout(() => {
    //     try {
    //       sub.next("observable 1");
    //       sub.next("Observable 2");
    //       sub.complete();
    //     }
    //     catch (e) {
    //       sub.error(e);
    //     }
    //   }, 2000);
    // })

    // const person1 =observer$.subscribe(x => console.log(x),
    //  (e)=>console.log(e),
    // ()=>console.log("Observable is complete"));


    // minumum 1 subscriber
    // const person2 = observer$.subscribe(Response => {
    //   console.log(Response);
    // })

    // const person3 =observer$.subscribe(Response =>{
    //   console.log(Response);
    // })

    // const person4 =observer$.subscribe(Response =>{
    //   console.log(Response);
    // })


    }




  }

function ngOnDestroy() {
  throw new Error('Function not implemented.');
}
