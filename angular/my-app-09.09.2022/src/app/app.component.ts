import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-09.09.2022';

 public color:string;
 public fontSize:number;
 public defaultSize:number;
 public text:string
 array :any [];
constructor(){
this.fontSize=50;
this.defaultSize=20;
this.color='red';
this.text = ''
this.array=['amresh','prasad'];

}
// two way binding
  fontsize(changeFont:string):void{
    this.fontSize=changeFont === 'dec'?this.fontSize-10:this.fontSize+10;

    if(this.fontSize===0 || this.fontSize===100){
        this.fontSize=this.defaultSize;
    }

  }

  // single binding
  keyup(value:any){
    this.text = value;

  }
  //two way binding

  value="";
  clearValue() {
   this.value="";
 }

//  add data in two way bindin
add(add:string){
 this.array.push(add);


}

}
