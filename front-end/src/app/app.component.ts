import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:3111';
  events:any
  getEvents() {
    this.events = this.http.get(this.configUrl+'/events');
  }
}
