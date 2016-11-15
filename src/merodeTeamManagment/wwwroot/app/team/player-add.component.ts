import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';


@Component({
  selector: 'player-detail',
  templateUrl: 'app/team/player-add.component.html',
styleUrls:['./app/team/player-detail.component.css']
})
export class PlayerAddComponent implements OnInit {
  
  constructor(
      private teamService: TeamService,
      private router: Router) {
             this.player = { firstName: "", lastName: "", email: "" };
        }
      @Input() 
       player: IPlayer;
  
      ngOnInit() {
          
        }
      goBack() {
        window.history.back();
      }

      save() {
          this.teamService.addPlayer(this.player);
          let link = ['team'];
          this.router.navigate(link);
      }
}