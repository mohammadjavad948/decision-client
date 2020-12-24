import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
   <div class="user">
     <app-owner-icon *ngIf="user.admin"></app-owner-icon>
     <span>{{user.name}}</span>
   </div>
  `,
  styles: [
    '.user{width: 100%; height: 45px; display: flex; align-items: center;}',
    'span{color: white; margin-left: 10px; font-size: 17px; font-weight: 500;}'
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
