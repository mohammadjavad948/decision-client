import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-name',
  template: `
    <div class="top">
      <span class="text">channel 1</span>
    </div>
    <hr>
  `,
  styles: [
    // tslint:disable-next-line:max-line-length
    '.top{display: flex; width: 100%; height: 48px; color: white; background: #393e46; align-items: center; justify-content: space-evenly;}',
    'hr{margin: unset;}',
    '.text{font-size: 17px;}'
  ]
})
export class ChannelNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
