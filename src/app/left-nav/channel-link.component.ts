import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-link',
  template: `
    <div class="back">
      <span>channel 1</span>
    </div>
  `,
  styles: [
    '.back{width: 100%; height: 30px; display: flex; align-items: center; border-radius: 8px;}',
    'span{color: white; margin-left: 10px; font-size: 16px; font-weight: 500;}',
    '.back:hover{background: rgba(255,255,255,0.1); }',
    '.active{background: rgba(255,255,255,0.4);}'
  ]
})
export class ChannelLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
