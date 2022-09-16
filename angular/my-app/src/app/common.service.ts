import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  bookUrl="http://localhost:3000/customers"
  constructor(
     public _http:HttpClient ) {
   }

  public getcustomers(){

    return this._http.get(this.bookUrl)
   }

   onDelete (bookid:String):Observable<number>{
    debugger
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this._http.delete<number>(this.bookUrl+"/"+bookid);
  }
}
