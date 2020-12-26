import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {changeScale, runAnime} from './blob.js';
import {LoginService} from '../service/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private login: LoginService, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    runAnime();
  }

  doLogin(){
  }
}
