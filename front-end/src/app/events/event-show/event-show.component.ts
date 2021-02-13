import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { EventModel } from '../event-model';
import {EventHttpService} from '../event-http.service'

@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {
  
  event:any
  constructor( private route: ActivatedRoute,private eventHttpService: EventHttpService) { 
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.event = params['id'];
    })
  }

}
