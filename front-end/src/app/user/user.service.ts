import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenComponent } from '../token/token.component';
import { TokenService } from '../token.service';
import { ClientId } from '../client-id';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService) { }
 
  userUrl = 'api/users';
  
  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getClientID():Observable<ClientId>{
    return this.http.get<ClientId>(`${this.userUrl}/github_client_id`)
  }

  get(id:number):Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`)
  }

  logout(){
    return this.tokenService.setToken(null)
  }

  current():Observable<User>{
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.tokenService.getToken());

     return this.http.get<User>(`${this.userUrl}/current`, {
       headers: headers_object
     })
  }

  request(){
    this.router.navigate(
      ['https://github.com/login/oauth/authorize'],
      { queryParams: { order: 'popular' } }
    );
  }

  token(){
    this.tokenService.getToken();
  }

  httpOptions():Object{
    return this.tokenService.headers()
  }
    

}
