import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User
  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
      this.userService.getUser(+id).subscribe(
        user => this.user = user
      )
  }

  login(){
    this.userService.loginUser(this.user.id).subscribe()
  }

}
