import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers:any=[];
  constructor() {

    this.customers=[
      {
        id:1,
        name:'Amresh',
        email:'amresh@gmail.com'
      },
      {
        id:2,
        name:'Shivam',
        email:'shivam@gmail.com'
      },
      {
        id:3,
        name:'Rajesh',
        email:'rajesh@gmail.com'
      },
      {
        id:4,
        name:'Mukesh',
        email:'mukesh@gmail.com'
      },
      {
        id:5,
        name:'rajesh',
        email:'rajesh@gmail.com'
      },

    ]
  }

  ngOnInit(): void {


  }
  Ondelete(id: number) {
    console.log(id)
    this.customers.forEach((value : any,index_id: any)=>{
      if(value.id==id) this.customers.splice(index_id,1);
  });

}
}
