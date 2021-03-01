import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './event/events/events.component';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event/events/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
