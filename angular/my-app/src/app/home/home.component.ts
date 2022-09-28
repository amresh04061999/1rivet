import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public showDetails:any
public observable = new Observable();
public observer1:any;
a:number=10;
b:number=10;
// observer$:Observable<any> | undefined
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((Details)=>{
      this.showDetails=Details;
    })
  }

  ngAfterViewInit():void{

    this.observer1 = this.observable.subscribe({
     next: (msg)=>{
      console.log(msg);
     },
     error: (err)=>{
      console.log(err);
     },
     complete: () => {
      console.log("Completed")
     }
    });


    if(this.a==this.b){
      this.observer1.next("Next is called");
    }
    else{
      this.observer1.error("Error");
    }
    this.observer1.complete();
  }






}
