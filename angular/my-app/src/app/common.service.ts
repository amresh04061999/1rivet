import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  bookUrl="http://localhost:3000/customers"
  constructor(
    private _http:HttpClient ) {
   }

  public getcustomes(){
    
    return this._http.get(this.bookUrl)
   }

   BookDelete (bookid:String):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this._http.delete<number>(this.bookUrl+"/"+bookid);
  }
}
