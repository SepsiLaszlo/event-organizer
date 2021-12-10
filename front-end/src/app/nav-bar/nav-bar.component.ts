import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

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
    private userService: UserService) {
    userService.current().subscribe(
      user => this.currentUser = user
    )
    userService.getClientID().subscribe(
      clientId => this.clientUrl = `https://github.com/login/oauth/authorize?client_id=${clientId["clientId"]}`
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
