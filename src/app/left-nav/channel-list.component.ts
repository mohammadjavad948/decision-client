import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-list',
  template: `
    <div class="list">
      <app-channel-link [channel]="{name: 'test'}"></app-channel-link>
    </div>
  `,
  styles: [
    '.list{height: -webkit-fill-available; overflow: hidden auto; padding: 20px 5px 0 5px;}',
    '::-webkit-scrollbar {width: 10px;}',
    '::-webkit-scrollbar-track {background: #282c3382;}',
    '::-webkit-scrollbar-track {background: #888;}',
    '::-webkit-scrollbar-track:hover {background: #555; }',
  ]
})
export class ChannelListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
