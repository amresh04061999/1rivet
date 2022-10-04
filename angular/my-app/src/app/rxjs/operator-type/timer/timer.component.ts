import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DesignUtilityServicesService } from '../../design-utility-services.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

   public videoUnsubscription:Subscription
  constructor(
    private design:DesignUtilityServicesService
  ) {

    this.videoUnsubscription=new Subscription()
   }
  ngOnInit(): void {

    //  using timer or interval to create observable stream
    // timer pass 2 argument timer(delay,interval)
    const broadCastVideo=timer(5000,3000);
    this.videoUnsubscription=broadCastVideo.subscribe(res=>{
    console.log(res);
    this.design.print(res,'elcontainer')
    if(res >=7){
      this.videoUnsubscription.unsubscribe();
    }
    

    })

  }

}
