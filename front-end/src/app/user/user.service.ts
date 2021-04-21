import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userUrl = 'api/users';

  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  get(id:number):Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`)
  }

  login(id:number){
    return this.http.post(`${this.userUrl}/${id}/login`,"")
  }

  logout(){
    return this.http.post(`${this.userUrl}/logout`,"")
  }

  current():Observable<User>{
    return this.http.get<User>(`${this.userUrl}/current`)
  }
}
