import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {
  public baseUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getuser(): Observable<user[]> {
    const baseUrl: string = this.baseUrl + 'user';
    return this._http.get<user[]>(baseUrl);
  }

  adduser(user: user): Observable<user> {
    const baseUrl: string = this.baseUrl + 'user';
    return this._http.post<user>(baseUrl, user);
  }

  updateUser(user: user, id: number): Observable<user> {
    const baseUrl: string = this.baseUrl + 'user/' + id;
    return this._http.put<user>(baseUrl, user);
  }

  deleteUser(id: number): Observable<user> {
    const baseUrl: string = this.baseUrl + 'user/' + id;
    return this._http.delete<user>(baseUrl);
  }
}
