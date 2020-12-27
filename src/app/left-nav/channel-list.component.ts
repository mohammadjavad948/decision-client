import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-channel-list',
  template: `
    <div class="list">
      <app-channel-link *ngFor="let channel of channels" [channel]="channel"></app-channel-link>
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
  channels = [];
  constructor(private channel: ApiService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void{
    this.channel.getChannels().subscribe((data) => {
      this.channels = data;
    });
  }
}
