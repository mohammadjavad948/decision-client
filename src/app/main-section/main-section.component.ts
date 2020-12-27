import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.connectToSocket();
  }
  connectToSocket(): void{
    console.log('connnecting to socket');
    const socket = io(environment.endpoint);

    socket.on('connect', () => {
        console.log(socket.id);

        this.login.loginToSocket(socket);
        socket.on('authenticated', () => {
          console.log('yo');
        });
    });
  }
}
