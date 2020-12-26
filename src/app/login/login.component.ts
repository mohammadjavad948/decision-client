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
  // @ts-ignore
  form: FormGroup;
  constructor(private login: LoginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    });
    runAnime();
  }

  doLogin(): void{
    this.login.login(this.form.value).subscribe(data => {

      let i = 1.5;
      const interval = setInterval(() => {
        changeScale(i);
        i += 0.01;
      }, 2);

      setTimeout(() => {
        clearInterval(interval);
        localStorage.setItem('token', data['token']);
      }, 600);
    });
  }
}
