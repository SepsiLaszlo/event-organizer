import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../event-model';
import { EventService } from '../events/event.service';


@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {

  constructor() { }

  @Input() 
  dataSource:Observable<EventModel[]>;
  ngOnInit(): void {
    
  }
  displayedColumns: string[] = ['id', 'name', 'date'];
}
