import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {changeScale, runAnime} from './blob.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    runAnime();
  }
}
