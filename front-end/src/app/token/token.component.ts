import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tokenService: TokenService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tokenService.setToken(params['token']);
    });
  }

 
}
