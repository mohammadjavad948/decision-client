import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-name',
  template: `
    <div class="top">
      <span>channel 1</span>
    </div>
    <hr>
  `,
  styles: [
    '.top{display: block; width: 100%; height: 48px; color: white; background: #393e46}',
    'hr{margin: unset;}'
  ]
})
export class ChannelNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
