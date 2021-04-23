import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventModel } from '../event-model';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private heroesUrl = '/api/events'
  constructor(
    private http: HttpClient
  ) { }
  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<EventModel[]>('getEvents', []))
      )
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getEvent(id: number): Observable<EventModel> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<EventModel>(url).pipe(
      catchError(this.handleError<EventModel>(`getHero id=${id}`))
    );
  }
  updateEvent(event: EventModel): Observable<any> {
    return this.http.put(this.heroesUrl + `/${event.id}`, event, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** POST: add a new hero to the server */
  addEvent(hero: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<EventModel>('addHero'))
    );
  }
  deleteEvent(event: EventModel | number): Observable<EventModel> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<EventModel>(url, this.httpOptions).pipe(
      catchError(this.handleError<EventModel>('delete Event'))
    );
  }

  eventAddedSource = new Subject<EventModel>();
  eventAdded$ = this.eventAddedSource.asObservable();

  eventAdd(event: EventModel): Observable<EventModel>{
  //  this.eventAddedSource.next(event);
    return this.http.post<EventModel>(this.heroesUrl, event, this.httpOptions).pipe(
      catchError(this.handleError<EventModel>('addHero'))
    );
  }

  participant
}
