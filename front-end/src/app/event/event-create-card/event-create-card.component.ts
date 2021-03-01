import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventModel } from '../event-model';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-event-create-card',
  templateUrl: './event-create-card.component.html',
  styleUrls: ['./event-create-card.component.css']
})
export class EventCreateCardComponent implements OnInit {
  @Input() event: EventModel;
  
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
  }
  eventAdd(eventName:string, eventDate:string){
    const newEvent:EventModel = {
      name: eventName,
      date:eventDate
    }
    console.log("event add")
    this.eventService.eventAdd(newEvent)
  }
}
