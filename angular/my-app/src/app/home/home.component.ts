import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public showDetails:any
  constructor(

    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((Details)=>{
      this.showDetails=Details;
    })
  }

}
