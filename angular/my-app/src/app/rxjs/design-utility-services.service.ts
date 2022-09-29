import { Injectable } from '@angular/core';

@Injectable(
 
)
export class DesignUtilityServicesService {

  constructor() { }

  print(val:any,containerId:any){ 
    let el =document.createElement('li');
    el.innerText=val;
    document.getElementById(containerId)?.appendChild(el)

  }
}
