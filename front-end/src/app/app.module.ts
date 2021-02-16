import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { EventIndexComponent } from './events/event-index/event-index.component';
import { EventShowComponent } from './events/event-show/event-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EventIndexComponent,
    EventShowComponent,
    EventEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
      MatFormFieldModule,
      MatInputModule,
     
     
   ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
