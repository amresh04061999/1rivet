import { Component, OnInit } from '@angular/core';
import { from, ReplaySubject } from 'rxjs';
import { DesignUtilityServicesService } from '../../design-utility-services.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor( private design:DesignUtilityServicesService) { }

  ngOnInit(): void {

    // from using array
    const array =['amresh','ramesh','ravi','mahesh','yogesh'];
    const observable1$ =from(array)
    observable1$.subscribe(res=>{
      console.log(res)
      this.design.print(res,'elcontainer')
    })

    // from -promises
    const promiss=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Promises resolve')
      },2000)

    })
   
   const observable2$=from(promiss)
    observable2$.subscribe(res=>{
      console.log(res)
      this.design.print(res,'elcontainer2')
    })

    //  from -> string conver observable with space  count observable
    const string=('i am amresh prasad')
    const observable3$=from(string)
    observable3$.subscribe(res=>{
      console.log(res)
      this.design.print(res,'elcontainer3')
    })
  }

}
