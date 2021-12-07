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
}
