import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
   <div class="user">
     <span>{{user.name}}</span>
     <app-owner-icon *ngIf="user.admin"></app-owner-icon>
   </div>
  `,
  styles: [
    '.user{width: 100%; height: 45px; display: flex; align-items: center; cursor: pointer; margin-top: 5px;}',
    'span{color: white; font-size: 17px; font-weight: 500; margin-left: 8px;}',
    '.user:hover{background: rgba(255, 255, 255, 0.1); border-radius: 8px;}'
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
