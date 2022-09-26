import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { users } from 'src/app/user/model/user.model';
import { employee } from '../model/employee.model';

@Injectable()
export class EmployeeserviceService {
  private url:any
  constructor(
    private http:HttpClient

  ) { 

    this.url='http://localhost:3000/'
  }


    // get employee services
  getEmploye():Observable<any>{
    const baseURL=this.url + 'employee';
    return this.http.get(baseURL);

  }
  // get employee id services
  public getEmployeeId(id:number):Observable<any>{
    const baseURL=this.url + 'employee/' + id;
    return this.http.get(baseURL)


  }
  //  add employee services
  addEmployee(employee:employee):Observable<any>{
    const baseURL=this.url+'employee';
      return this.http.post(baseURL,employee);
  }
// Delete Services
   deleteEmployee(id:number):Observable<any>{
    const baseURL=this.url + 'employee/'+ id;
    return this.http.delete(baseURL)

   }

    // edite services
    editeEmployeee(employee:employee,id:number):Observable<any>{
      const baseURL=this.url + 'employee/'+ id;
      return this.http.put(baseURL,employee)

    }
}
