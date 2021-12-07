import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenComponent } from '../token/token.component';
import { TokenService } from '../token.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService) { }
 
  userUrl = 'api/users';
  
  getAll():Observable<User[]> {
    let token = this.tokenService.getToken(); 

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

  request(){
    this.router.navigate(
      ['https://github.com/login/oauth/authorize'],
      { queryParams: { order: 'popular' } }
    );
  }
}
