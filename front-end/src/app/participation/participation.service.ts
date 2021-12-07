import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, partition } from 'rxjs';
import { TokenComponent } from '../token/token.component';
import { User } from '../user/user';
import { Participation } from './participation'
@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(private http: HttpClient) { }

  participationUrl = "api/participations"

  getAll():Observable<Participation> {
    // now returns an Observable of Config
    return this.http.get<Participation>(this.participationUrl);
  }

  getForUser(id:number)
  {
    
    return this.http.get<Participation[]>(`${this.participationUrl}/for_user/${id}`);
  }

  getForEvent(id:number)
  {
    return this.http.get<Participation[]>(`${this.participationUrl}/for_event/${id}`);
  }
  create( participation:Participation): Observable<Participation>{
    return this.http.post<Participation>(this.participationUrl, participation)
  }
}