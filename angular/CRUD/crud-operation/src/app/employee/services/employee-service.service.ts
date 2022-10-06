import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../model/employee.model';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class EmployeeServiceService {
 public url:any
  constructor(
    private _http:HttpClient
  ) {
    this.url='http://localhost:3000/'
  }

  // add employee
  public addEmployee(employee:employee[]):Observable<any>{
    const baseUrl:string= this.url + 'employee';
    return this._http.post(baseUrl,employee)
  }
  // get employee
  public getemployee():Observable<any>{
    const baseUrl:string=this.url + 'employee'
    return this._http.get(baseUrl);

  }
  // delete
public employeeDelete(id:Number):Observable<any>{
  const baseUrl:string=this.url +'employee/'+ id;
  return this._http.delete(baseUrl)

}

public getemployeeByID(id:Number):Observable<any>{
  const baseUrl:string=this.url + 'employee/' + id;
  return this._http.get(baseUrl)
}

public editemployee( employe: employee[],id:Number):Observable<any>{
  const baseUrl:string=this.url + 'employee/' + id;
  return this._http.put(baseUrl,employe)
}

}
