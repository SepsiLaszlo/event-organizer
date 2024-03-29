import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './event/events/events.component';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event/events/event-detail/event-detail.component';
import { UsersComponent } from './user/users/users.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'token', component: TokenComponent}

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
