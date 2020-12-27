import {Component, OnInit} from '@angular/core';
import {LoginService} from './service/login.service';
import {io} from 'socket.io-client';
import {environment} from '../environments/environment';
import {loadingAnime} from './animation/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    loadingAnime
  ]
})
export class AppComponent implements OnInit{
  serverOnline = false;
  constructor(public login: LoginService) {
  }
  ngOnInit(): void {
    const socket = io(environment.endpoint);

    socket.on('connect', () => {
      this.serverOnline = true;
    });
    socket.on('disconnect', () => {
      this.serverOnline = false;
    });
  }
}
