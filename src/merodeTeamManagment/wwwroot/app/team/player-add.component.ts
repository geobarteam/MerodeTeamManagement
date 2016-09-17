import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { TeamService } from '../services/team.service';


@Component({
  selector: 'player-detail',
  templateUrl: 'app/team/player-add.component.html',
styleUrls:['./app/team/player-detail.component.css']
})
export class PlayerAddComponent implements OnInit {
  
  constructor(
  private teamService: TeamService) {
}
      @Input() 
       player: IPlayer;
  
  ngOnInit(){
    
  }
  goBack() {
    window.history.back();
  }
}