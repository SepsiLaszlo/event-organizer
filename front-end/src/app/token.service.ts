import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  token:String = null;

  getToken():String{
    return this.token;
  }

  setToken(token){
    this.token = token;
  }

  headers():Object{
    return  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })}
  }
}
