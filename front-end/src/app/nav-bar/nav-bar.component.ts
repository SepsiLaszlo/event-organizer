import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  currentUser: User
  clientUrl:string
  constructor(private breakpointObserver: BreakpointObserver,
    private userService: UserService, private tokenService: TokenService) {
    userService.current().subscribe(
      user => this.currentUser = user
    )
    userService.getClientID().subscribe(
      clientId => this.clientUrl = `https://github.com/login/oauth/authorize?client_id=${clientId["clientId"]}`
    )

    tokenService.getTokenSetSubject().subscribe(
      () =>
      {
        userService.current().subscribe(user => this.currentUser = user )
      }
    )
  }

  openLogin(){
    document.defaultView.open(this.clientUrl,"_self")
  }

  logout(){
    this.userService.logout()
    this.currentUser = null
  }

  request(){
    this.userService.request()
  }



}
