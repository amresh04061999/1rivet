import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { count, fromEvent } from 'rxjs';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss']
})
export class FormEventComponent implements OnInit,AfterViewInit {

  constructor(
    private design:DesignUtilityServicesService
  ) { }
 
   @ViewChild('addbtn')addbtn!: ElementRef;
   
  ngOnInit(): void {
   
  }
// create streem of data using formEvent 
  ngAfterViewInit(): void {
    let count= 1;
   fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
    let value=`video${count++}`
    this.design.print(value,'elcontainer')

   })
  }


}
