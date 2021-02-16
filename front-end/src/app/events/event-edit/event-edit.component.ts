import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgZone, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { EventHttpService } from '../event-http.service';
import { EventModel } from '../event-model';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  event?: EventModel
  constructor(private _ngZone: NgZone,private route: ActivatedRoute, private eventHttpService:EventHttpService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((data: any) => 
    this.eventHttpService.getEvent(data.id)))
    .subscribe((data: EventModel) =>  this.event = data);
  }

  @ViewChild('autosize') autosize?: CdkTextareaAutosize ;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize?.resizeToFitContent(true));
  }
}
