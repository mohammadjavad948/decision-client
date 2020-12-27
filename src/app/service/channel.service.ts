import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }
  public getChannels(): Observable<any>{
    return this.http.get(environment.endpoint + '/channels', {
      headers: this.header()
    });
  }
  public header(): HttpHeaders{
    // @ts-ignore
    return new HttpHeaders({token: localStorage.getItem('token')});
  }
}
