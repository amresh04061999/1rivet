import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  // public observable$:Observable<any>;
  observable$:any
  obse1:any
  person:any
  constructor() {


  }



  ngOnInit(): void {

    this.observable$=new Observable((obse1)=>{

              this.obse1.next(10);
              this.obse1.next(550);
              this.obse1.next(15);
              this.obse1.next(10);
              this.obse1.next(18);
              if(3>5){
                obse1.error('error')
              }
              else{
                obse1.complete()

              }
            })
     }


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




