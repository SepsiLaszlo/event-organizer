import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Participation } from 'src/app/participation/participation';
import { ParticipationService } from 'src/app/participation/participation.service';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User
  currentUser:User
  participations$:Observable<Participation[]>

  constructor(private route: ActivatedRoute,
              private userService:UserService,
              private participationService:ParticipationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
      this.userService.get(+id).subscribe(
        user => this.user = user
      )
    
     this.participations$ = this.participationService.getForUser(+id)

  }

  login(){
    this.userService.login(this.user.id).subscribe()
  }

  logout(){
    this.userService.logout().subscribe()
  }

  current(){
    this.userService.current().subscribe(
      user => this.currentUser=user
    )
  }

  isCurrent():boolean{
    return this.user.id == this.currentUser.id
  }



}
