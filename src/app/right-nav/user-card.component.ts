import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `
   <div class="user">
     <span>{{user.name}}</span>
   </div>
  `,
  styles: [
    '.user{width: 100%; height: 45px; display: flex; align-items: center;}',
    'span{color: white; margin-right: 10px}'
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
