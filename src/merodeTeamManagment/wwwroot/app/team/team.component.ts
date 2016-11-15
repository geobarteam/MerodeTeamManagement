
import { Component } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { PlayerDetailComponent } from './player-detail.component';
import { TeamService } from '../services/team.service'
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'my-team',
    templateUrl: 'app/team/team.component.html',
    styleUrls: ['./app/team/team.component.css']
})
export class TeamComponent implements OnInit { 
    
    team:IPlayer[];
    constructor(
        private teamService: TeamService,
        private router: Router
    ) {
      
    }
    ngOnInit(){
      this.teamService.getPlayers("dummy").then(
        players => this.team = players);
    }
    
    selectedPlayer: IPlayer;
    
    title = 'Tour of players';
        
    onSelect(player:IPlayer){
      this.selectedPlayer = player;
    }
    
    gotoDetail(player: IPlayer) {
        let link = ['playerDetail', { name: player.lastName }];
        this.router.navigate(link);
        }
    gotoAddPlayer(){
        let link = ['addPlayer'];
        this.router.navigate(link);
    }
}