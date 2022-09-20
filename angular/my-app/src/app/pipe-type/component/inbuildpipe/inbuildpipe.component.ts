import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.scss']
})
export class InbuildpipeComponent implements OnInit {
  public customers:any=[];
  constructor() { }

  ngOnInit(): void {
    this.customers=[
      {
        id:1,
        name:'Amresh',
        email:'amresh@gmail.com',
        number:1234,
        percent:0.123456,
        date:new Date()
      },
      {
        id:2,
        name:'Shivam',
        email:'shivam@gmail.com',
        number:1534,
        percent:0.123556,
        date:new Date()
      },
      {
        id:3,
        name:'Rajesh',
        email:'rajesh@gmail.com',
        number:5534,
        percent:0.123556,
        date:new Date()
      },
      {
        id:4,
        name:'Mukesh',
        email:'mukesh@gmail.com',
        number:1334,
        percent:0.123556,
        date:new Date()
      },
      {
        id:5,
        name:'rajesh',
        email:'rajesh@gmail.com',
        number:15344,
        percent:0.123556,
        date:new Date()
      },
  
    ]
  }
  
}
