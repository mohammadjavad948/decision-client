import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Socket} from 'socket.io-client';
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
  public loginToSocket(socket: Socket): void{
    socket.emit('login', localStorage.getItem('token'), (res: any) => {
      if (!res.ok) { localStorage.removeItem('token'); }
    });
  }
}
