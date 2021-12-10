import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../../event-model';
import { EventService } from '../event.service';
import { Location } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEditDialogComponent } from '../../event-edit-dialog/event-edit-dialog.component';
import { from, Observable } from 'rxjs';
import { Participation } from 'src/app/participation/participation';
import { ParticipationService } from 'src/app/participation/participation.service';
import { parseTemplate } from '@angular/compiler';
import {ParticipationTableComponent} from '../../participation-table/participation-table.component'
import { UserService } from 'src/app/user/user.service';
import { switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: EventModel;
  participations$:Observable<Participation[]>
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private router: Router,
    public dialog: MatDialog,
    private participationService: ParticipationService,
    private userService:UserService

  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getEvent(id)
    this.participations$ = this.participationService.getForEvent(id)
  }
  getEvent(id) {
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event)
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.eventService.updateEvent(this.event)
      .subscribe(() => this.goBack());
  }
  delete(event: EventModel): void {
    this.eventService.deleteEvent(event).subscribe(
      _ => this.router.navigate(['events'])
    );
  }
  
  register(){
   this.userService.current().subscribe(
     user => {
       let participation:Participation ={
         user_id:user.id,
         user_name: user.name,
         event_id: this.event.id,
         id: -1
       }
       this.participationService.create(participation).subscribe(
         participation => console.log(participation)

         )
     }
   )
  }

  openDialog() {
    this.dialog.open(EventEditDialogComponent, {
      data: {
        event: this.event
      }
    });
  }
}
