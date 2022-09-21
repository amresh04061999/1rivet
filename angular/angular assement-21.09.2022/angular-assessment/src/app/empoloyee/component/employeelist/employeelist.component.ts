import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  @Output() editdata= new EventEmitter();
  customerid:number
  @Input() details:any;
   x: any;
  constructor(
    private router:Router,
    private activaterouter:ActivatedRoute
  ) {
    this.customerid=this.activaterouter.snapshot.params['customerid'];
    this.editdata=new EventEmitter();
  }

  ngOnInit(): void {
  }
// delete data function
  onDelete(x: any){
    var datadelte = confirm(" Do you want to delete ?");
    if ( datadelte== true ) {
      this.details.splice(x, 1 );
    }
  }
// show details
  detailsshow(item:any){
    this.router.navigate(['epmpoyee/dtails'],{ queryParams:item  });
  }
  // edite function
  editemploye(item:any):void{
    this.editdata.emit(item)

  }
}
