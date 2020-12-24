import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './left-nav/top-bar.component';
import { ChannelListComponent } from './left-nav/channel-list.component';
import { ChannelLinkComponent } from './left-nav/channel-link.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { UserCardComponent } from './right-nav/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    TopBarComponent,
    ChannelListComponent,
    ChannelLinkComponent,
    MainSectionComponent,
    RightNavComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
