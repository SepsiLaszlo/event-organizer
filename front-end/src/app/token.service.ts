import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from, Observer } from 'rxjs';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  token:String = null;
  tokenSetSubject = new Subject();

  getTokenSetSubject(){
    return this.tokenSetSubject;
  }

  getToken():String{
    this.token = localStorage.getItem("jwt-token")
    return this.token;
  }


  setToken(token){
    this.token = token;
    localStorage.setItem("jwt-token", token);
    this.tokenSetSubject.next()
  }

  headers():Object{
    return  {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        Authorization: `${this.getToken()}`
      })}
  }
}
