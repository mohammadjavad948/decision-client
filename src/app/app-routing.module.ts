import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainSectionComponent} from './main-section/main-section.component';
import {SelectAChannelComponent} from './select-a-channel/select-a-channel.component';

const routes: Routes = [
  {
    path: '',
    component: SelectAChannelComponent
  },
  {
    path: ':id',
    component: MainSectionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
