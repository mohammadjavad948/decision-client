import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <div class="top-bar">
      <span class="text">{{appName}}</span>
    </div>
    <hr>
  `,
  styles: [
    '.top-bar{width: 100%; height: 40px; display: flex; align-items: center; justify-content: space-between; color: white;}',
    'hr{margin: unset;}',
    '.text{margin-left: 5px; font-size: 17px; line-height: 25px; font-weight: 700;}'
  ]
})
export class TopBarComponent implements OnInit {
  appName = 'decision core';

  constructor() { }

  ngOnInit(): void {
  }

}
