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
    '.user{width: 100%; height: 45px; display: flex; align-items: center;}',
    'span{color: white; font-size: 17px; font-weight: 500;}'
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
