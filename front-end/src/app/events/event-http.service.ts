import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from './event-model';

@Injectable({
  providedIn: 'root'
})
export class EventHttpService {

  constructor(private http: HttpClient) { }
  
  eventURL = 'http://localhost:3111';

  getEvents():Observable<EventModel[]> {
  return this.http.get<EventModel[]>(this.eventURL+'/events');
  }
  getEvent(id:any):Observable<EventModel>{
    return this.http.get<EventModel>(this.eventURL+'/events/'+id);
  }
}
