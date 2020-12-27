import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.connectToSocket();
  }
  connectToSocket(): void{
    console.log('connnecting to socket');
    const socket = io(environment.endpoint);

    socket.on('connect', () => {
        console.log(socket.id);
    });
  }
}
