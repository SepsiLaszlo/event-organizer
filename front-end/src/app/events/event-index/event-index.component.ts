import { Component, OnInit } from '@angular/core';
import { EventHttpService } from '../event-http.service';

@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css']
})
export class EventIndexComponent implements OnInit {

  constructor( private eventHttpServise: EventHttpService) { }
  events = this.eventHttpServise.getEvents();
  ngOnInit(): void {
  }

}
