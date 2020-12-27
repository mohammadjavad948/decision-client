import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainSectionComponent} from './main-section/main-section.component';

const routes: Routes = [
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
