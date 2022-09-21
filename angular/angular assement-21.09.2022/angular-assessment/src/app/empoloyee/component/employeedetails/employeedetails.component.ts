import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

  public getprame:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.queryParamMap.subscribe(params => this.getprame=params
   )
}

}
