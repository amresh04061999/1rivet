import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public collection:any;
  customers:any=[];
  getcustomes: any;
  constructor(
    private CommonService:CommonService
  ) {

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
  this.CommonService.getcustomes().subscribe((result)=>{
    this.collection=result;
    console.log(this.collection);

  });

  }
//   Ondelete(id: number) {
//     console.log(id)
//     this.collection.forEach((value : any,index_id: any)=>{
//       if(value.id==id) this.collection.splice(index_id,1);
//   });

// }

BookDelete(bookid:string){
  this.CommonService.BookDelete(bookid)
  .subscribe((book: any)=>{
    this.getcustomes();
  })
}
}