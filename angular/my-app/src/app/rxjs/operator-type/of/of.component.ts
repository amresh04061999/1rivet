import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityServicesService } from '../../design-utility-services.service';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  public message:any;
  constructor( private design:DesignUtilityServicesService) { }

  ngOnInit(): void {

    // of creation Operator
   
    const observable1$=of('amresh','ramesh','ravi','mahesh','yogesh'); // this is observable to create using of operator

    observable1$.subscribe(res=>{
      console.log(res)
      this.design.print(res,'elcontainer');
    })
    //  create observable in object
    const observable2$=of({a:'amresh',b:'ramesh',c:'ravi',d:'mahesh',e:'yogesh'}); // this is observable to create using of operator
    observable2$.subscribe(res=>{
      console.log('this is object')
      this.message=res
      console.log(this.message)
     
    })
  }

}
