import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { OvenComponent } from '../oven/oven.component';
import { WatchComponent } from '../watch/watch.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
@ViewChild('container', {read:ViewContainerRef,static:true})
container!:ViewContainerRef
productName:any={
  mobile:'mobile',
  laptop:'laptop',
  watch:'watch',
  oven:'oven',
}

constructor() {
 }

  ngOnInit(): void {
  }
  Createcomponent( componentName:string){
    debugger

    this.container.clear();
    const ComponentType=this.getComponentType(componentName);
   const component= this.container.createComponent(ComponentType)
    component.instance.name=componentName


  }

  getComponentType(name:string):Type<any>{
    // debugger
    switch(name){
      case  this.productName.mobile:
        this.container.createComponent(MobileComponent);
        break;
        case  this.productName.laptop:
        this.container.createComponent(LaptopComponent);
        break;
        case  this.productName.watch:
        this.container.createComponent(WatchComponent);
        break;
        case  this.productName.oven:
          this.container.createComponent(OvenComponent);
          break;
      // default:
      //   this.container.createComponent(MobileComponent);
    }
    return  Type
  }
}
