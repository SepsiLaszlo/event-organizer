import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { EventIndexComponent } from './events/event-index/event-index.component';
import { EventShowComponent } from './events/event-show/event-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EventIndexComponent,
    EventShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
