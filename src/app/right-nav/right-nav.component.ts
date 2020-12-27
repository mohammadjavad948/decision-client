import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {
  users = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void{
    this.api.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
