import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { employee } from '../model/employee.model';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
    // public Employeelist$:Observable<any>
    public Employeelist:any

    @Output() editdata= new EventEmitter();
  constructor(
    private route:Router,
    private employeeservices:EmployeeserviceService
  ) {
    this.editdata=new EventEmitter();

    // this.Employeelist$=this.employeeservices.getEmploye()
  }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.employeeservices.getEmploye().subscribe((employee)=>{
      this.Employeelist=employee
    })
  //  this.Employeelist$=this.employeeservices.getEmploye()
  }
  //  nagivate router fuction
  emppyeeform(){
    this.route.navigate(['employee/add'])
  }
  // edite employee function
  onEdit(id:number,item:any){
    // this.editdata.emit(item)
    this.route.navigate(['employee/edit',+id],{ queryParams:item })
  }
  // Delete employee function
  onDelete(id:number){
    this.employeeservices.deleteEmployee(id).subscribe((Response)=>{
      this.getEmployeeList();
    })
  }
  // show Details in employee
  showDetails(item:any){
    this.route.navigate(['home'],{ queryParams:item })

  }




}
