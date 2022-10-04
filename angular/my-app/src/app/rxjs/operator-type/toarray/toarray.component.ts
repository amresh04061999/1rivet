import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent implements OnInit {

  public sourcesub:Subscription
  constructor() { 
    this.sourcesub=new Subscription()
  }

  ngOnInit(): void {
    // example 1
    const source =interval(1000)
    this.sourcesub=source.pipe(take(5),toArray()).subscribe(res =>{
      console.log(res)
    })

    // example 2
    const user =[
    {name:'amresh',skill:'computer'},
    {name:'shivam',skill:'computer'},
    {name:'ramesh',skill:'computer'},
    {name:'mukesh',skill:'computer'}
  ]
  const source2=from(user);
  source2.pipe(toArray()).subscribe(res=>{
    console.log(res)
  })

 const users=['amresh','shivam','ramesh','mahesh','deepak']

 const source4 =of(users);
    source4.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })
  }

}
