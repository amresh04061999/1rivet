import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/app/customer.model';
import { CommonService } from 'src/app/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
   public title!:string;
  //  public btn!:string
    customerid:number
   public issubmited:Boolean;
    public customers:customer;
  constructor(
    // private commonservices:CommonServic
    private router:Router,
    private activaterouter:ActivatedRoute
  )
  {
    //  get using routing to get id
    this.customerid=this.activaterouter.snapshot.params['name'];
    console.log(this.customerid);
    this.customers=new customer();
    this.issubmited=false;


  }
  ngOnInit(): void {
    console.log();
    this.title="Add Customer";
    this.title=this.customerid? 'Edit Customer':'Add Customer';
    // this.btn=this.customerid?'Edit':'Add';
  }

// form start
@ViewChild('customerForm') customerForm!: NgForm;
// customer = new user(18, 'amresh', 'parasad','amresh@gmail.com');
onSubmit(){
this.issubmited=true;
console.log(this.customerForm)
console.log(this.customerForm.value)
console.log(this.customers);
 this.router.navigate(['customer']);

}
}
