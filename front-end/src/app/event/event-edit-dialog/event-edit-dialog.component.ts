import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventModel } from '../event-model';
import { EventService } from '../events/event.service';

export interface DialogData {
  animal: EventModel;
}
@Component({
  selector: 'app-event-edit-dialog',
  templateUrl: './event-edit-dialog.component.html',
  styleUrls: ['./event-edit-dialog.component.css']
})

export class EventEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private eventService:EventService, private router: Router,
                      private dialogRef: MatDialogRef<EventEditDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  event:EventModel = { id:this.data['event'].id, 
                      name: this.data['event'].name,
                      description: this.data['event'].description,
                      date:  this.data['event'].date}
  
  updateEvent(){
    this.eventService.updateEvent(this.event).subscribe(
      event => {
      this.dialogRef.close()
      this.router.navigate(['events',event.id])
      .then(() => {
        window.location.reload();
      });
    }
    )
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
