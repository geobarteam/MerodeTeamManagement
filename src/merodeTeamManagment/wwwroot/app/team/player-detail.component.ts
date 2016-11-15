import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { TeamService } from '../services/team.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'player-detail',
  template: `
  <div *ngIf="player">
    <h2>{{player.name}} details!</h2>
    <div><label>id: </label>{{player.id}}</div>
    <div>
      <label>firstName: </label>
      <input [(ngModel)]="player.firstName" placeholder="FirstName"/>
    </div>
    <div>
      <label>lastName: </label>
      <input [(ngModel)]="player.lastName" placeholder="name"/>
    </div>
    <div>
      <label>email: </label>
      <input [(ngModel)]="player.email" placeholder="name"/>
    </div>
    <button (click)="goBack()">Back</button>
  </div>
`,
styleUrls:['./app/team/player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  constructor(
      private teamService: TeamService,
      private route: ActivatedRoute,
      private router: Router  ) {
}
      @Input() 
       player: IPlayer;
  
      ngOnInit() {
       var email = "";
       this.route.params.forEach((params: Params) => {
           email = params["email"];
       });
       this.teamService.getPlayer(email)
        .then(player=> this.player = player);
  }
  goBack() {
    window.history.back();
  }
}
