import { Component, OnInit } from '@angular/core';
import {loadingAnime} from '../animation/loading';

@Component({
  selector: 'app-top-bar',
  template: `
    <app-setting *ngIf="setting" (closeClick)="closeSetting()" @loading></app-setting>
    <div class="top-bar">
      <span class="text">{{appName}}</span>
      <img src="/assets/image/cog.svg" alt="cog" class="cog" (click)="openSetting()">
    </div>
    <hr>
  `,
  styles: [
    '.top-bar{width: 100%; height: 48px; display: flex; align-items: center; justify-content: space-between; color: white;}',
    'hr{margin: unset;}',
    '.text{margin-left: 20px; font-size: 17px; line-height: 25px; font-weight: 500;}',
    '.cog{width: 20px; margin-right: 20px; cursor: pointer}'
  ],
  animations: [
   loadingAnime ,
  ]
})
export class TopBarComponent implements OnInit {
  appName = 'decision core';
  setting = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSetting(): void{
    this.setting = true;
  }
  closeSetting(): void{
    this.setting = false;
  }
}
