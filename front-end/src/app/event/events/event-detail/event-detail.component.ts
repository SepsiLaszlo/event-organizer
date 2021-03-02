import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../../event-model';
import { EventService } from '../event.service';
import { Location } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEditDialogComponent } from '../../event-edit-dialog/event-edit-dialog.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: EventModel;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private router: Router,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getEvent()
  }
  getEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
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

  openDialog() {
    this.dialog.open(EventEditDialogComponent, {
      data: {
        event: this.event
      }
    });
  }
}
