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

  public adduser(user: user[]): Observable<any> {
    const baseUrl: string = this.baseUrl + 'user';
    return this._http.post(baseUrl, user);
  }
}
