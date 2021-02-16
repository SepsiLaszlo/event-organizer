import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventIndexComponent } from './events/event-index/event-index.component';
import { EventShowComponent } from './events/event-show/event-show.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'events', component: EventIndexComponent},
  { path: 'events/:id', component: EventShowComponent},
  { path: 'events/:id/edit', component: EventEditComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
