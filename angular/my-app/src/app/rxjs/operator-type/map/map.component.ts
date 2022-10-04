import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityServicesService } from '../../design-utility-services.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {



  public unsub=new Subscription();
  public unsub1=new Subscription();
  constructor( private design:DesignUtilityServicesService) {

  }

  ngOnInit(): void {

    // Example 1 using map
   const broadCastVideo=interval(1000);
   this.unsub=broadCastVideo.pipe(map(data =>'video' + data))
   .subscribe(res=>{
          // console.log(res);
          this.design.print(res,'container');
   })
   setTimeout(()=>{
    this.unsub.unsubscribe();
   },10000)

   const broadCastVideo1=interval(1000);
   this.unsub1=broadCastVideo1.pipe(
    map(data=>data *  2)).
   subscribe(res=>{
    // console.log(res);
    this.design.print(res,'container2');

   })
   setTimeout(()=>{
    this.unsub1.unsubscribe();
   },10000)

  //  example 3 map object data
  const mamber=from([
  {id:1, name:'amresh'},
  {id:2, name:'shivam'},
  {id:3, name:'ramesh'},
  {id:4, name:'amresh'},
  {id:5, name:'tanvi'},
  {id:6, name:'amresh'},
  {id:7, name:'ravi'},
  {id:8, name:'mahesh'},
  ])

  // const observable$=from(mamber);


  mamber.pipe(map(data=>data?.name)).subscribe(res=>{
    this.design.print(res,'container3');
  })

  }
}
