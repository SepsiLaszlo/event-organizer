import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from '../event-model';
import { EventService } from './event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(
    private eventService: EventService
  ) { }

  events: EventModel[];;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.eventService.getEvents()
      .subscribe(heroes => this.events = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.eventService.addEvent({ name } as EventModel)
      .subscribe(event => {
        this.events.unshift(event);
        this.events = this.events.slice();
      });
  }
}
