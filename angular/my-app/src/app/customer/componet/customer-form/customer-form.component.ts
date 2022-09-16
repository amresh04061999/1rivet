import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
   public title!:string;
   public btn!:string
    customerid:number
  constructor( private router:Router,
    private activaterouter:ActivatedRoute
  )
  {

    this.customerid=this.activaterouter.snapshot.params['customerid'];
    console.log(this.customerid)

  }


  onSave(){
    this.router.navigate(['customer','customerlist'])
  }

  ngOnInit(): void {
    console.log();
    this.title="Add Customer";
    this.title=this.customerid? 'Edit Customer':'Add Customer';
    // this.btn=this.customerid?'Edit':'Add';
    // console.log(activaterouter);
  }

}
