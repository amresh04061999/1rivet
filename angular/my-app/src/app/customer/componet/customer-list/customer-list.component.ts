import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public collection:any;
  customers:any=[];
  // getcustomers:any;
  // getcustome: any;
  constructor(
    public CommonService:CommonService,
    private router:Router,
    private activateroute:ActivatedRoute
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
  this.CommonService.getcustomers().subscribe((result)=>{
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

onDelete(bookid:string){
  this.CommonService.onDelete(bookid)
  .subscribe((book: any)=>{
    if(book){
      this.CommonService.getcustomers().subscribe((result)=>{
        this.collection=result;
        // console.log(this.collection);

      });
    }

    // this.CommonService();
  })
  // this.router.navigate(['customer','delete']);
}

}


