import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public isLogin(): boolean{
    return !!localStorage.getItem('token');
  }
}
