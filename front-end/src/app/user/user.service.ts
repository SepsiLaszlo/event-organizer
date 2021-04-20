import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userUrl = 'api/users/';

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.userUrl}+${id}`)
  }
  loginUser(id:number){
    return this.http.post(`${this.userUrl}/${id}/login`,"")
  }
}
