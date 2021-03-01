import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../event-model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor() { }
  @Input() event: EventModel;

  ngOnInit(): void {
  }

}
