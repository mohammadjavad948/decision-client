import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-channel-name',
  template: `
    <div class="top">
      <span class="text">{{channel.name}}</span>
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
  channel: any;
  id = '';
  constructor(private api: ApiService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerParam();
    this.fetchChannel();
  }

  routerParam(): void{
    this.activatedRouter.params.subscribe(({id}) => {
      this.id = id;
    });
  }
  fetchChannel(): void{
    this.api.getChannel(this.id).subscribe(data => {
      this.channel = data;
    });
  }
}
