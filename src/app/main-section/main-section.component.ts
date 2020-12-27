import { Component, OnInit } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  connectToSocket(): void{
    
  }
}
