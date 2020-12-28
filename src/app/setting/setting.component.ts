import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @Output() closeClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  close(): void{
    this.closeClick.emit(true);
  }
}
