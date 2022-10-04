import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
public message:any
public unsubcription:Subscription
  constructor(
    private design:DesignUtilityServicesService
  ) { 
    this.unsubcription =new Subscription()
  }

  ngOnInit(): void {

    // using interval to cretate stream of data
    let brodcarst=interval(2000)
    this.unsubcription= brodcarst.subscribe(res =>{
      console.log('video');
      this.message=`video ${res}`;
      this.design.print(this.message,'elcontainer')
      this.design.print(this.message,'elcontaine2')
      this.design.print(this.message,'elcontainer3')
      
      if(res>=6){
        this.unsubcription.unsubscribe();
      }

     })

  }

}
