import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public isLogin(): boolean{
    return !!localStorage.getItem('token');
  }
  public login(data: any): Observable<any>{
    return this.http.post(environment.endpoint + '/auth/login', data);
  }
}
