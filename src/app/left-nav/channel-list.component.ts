import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-list',
  template: `
    <div class="list"></div>
  `,
  styles: [
    '.list{width: 100%; height: -webkit-fill-available; overflow: hidden auto;}',
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
