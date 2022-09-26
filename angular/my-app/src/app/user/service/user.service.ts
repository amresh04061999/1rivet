import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../model/user.model';

@Injectable()

export class UserService {
   public getURL:any

  constructor(
    private http:HttpClient
  )
   {

    this.getURL='http://localhost:3000/'

    
   }

    //  get user id in url  services
    public getuserByID(id:number):Observable<any>{
      const url=this.getURL + 'user/' + id;
       return this.http.get(url)
    }

  //  get a data  url in json
   public getuser():Observable<any>{
         const url=this.getURL + 'user';
          return this.http.get(url)
   }

// add user
   public adduser(user:users):Observable<any>{
    const url=this.getURL + 'user';
    return this.http.post(url,user)

   }
    // Delete user
    public deleteUser(id:number):Observable<any>{
      const url=this.getURL + 'user/'+ id;
     return this.http.delete(url)
    }
    //  edite user
    public editUser(user:users,id:number):Observable<any>{
      const url=this.getURL + 'user/'+ id;
       return this.http.put(url,user)
    }

}
