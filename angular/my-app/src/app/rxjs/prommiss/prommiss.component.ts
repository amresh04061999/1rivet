import { Component, OnInit } from '@angular/core';
import { DesignUtilityServicesService } from '../design-utility-services.service';

@Component({
  selector: 'app-prommiss',
  templateUrl: './prommiss.component.html',
  styleUrls: ['./prommiss.component.scss']
})
export class PrommissComponent implements OnInit {

  constructor(
    private design:DesignUtilityServicesService
  ) { }
  


  dellavailable(){
         return true
  }
  hpavailable(){
    return false
  }

   dell=[{
    Brand:'Dell',
    HardDisk:'2 TB',
    color:'black'
  }]

  hp=[{
    Brand:'Dell',
    HardDisk:'2 TB',
    color:'black'
  }]

  notAvilable=[{
    Brand:'Not available',
    status:'fail'
  }]

  ngOnInit(): void {
    
    let buylaptop =new Promise((resolve,reject )=>{
      if(this.dellavailable()){
        setTimeout(()=>{
          // resolve('Dell is purchased')
          console.log(this.dell);
        },2000)
       
      }else if(this.hpavailable()){
        setTimeout(()=>{
          // resolve('Hp is purchased')
          console.log(this.hp);
        },2000)
      }else{
        setTimeout(()=>{
          // reject('laptop is not avialble in store')
          console.log(this.notAvilable)
        },2000)
       
      }
    });

    buylaptop.then(res =>{
      this.design.print(res,'container')
    })
    .catch(res =>{
      console.log('reject=>' ,res)
      this.design.print(res,'container')

    });
  }

}
