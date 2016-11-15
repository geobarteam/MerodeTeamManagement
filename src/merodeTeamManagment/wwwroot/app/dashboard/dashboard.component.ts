import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { TeamService } from '../services/team.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    players: IPlayer[];
    IDBEnvironment:string;
    constructor(
        private teamService: TeamService,
        private router: Router    ) {
    
    }
    
    ngOnInit() {
        this.teamService.getPlayers("merode")
            .then(players => {
                this.players = players.slice(0, 4);
            });
    }
    
    gotoDetail(player: IPlayer) {
        let link = ['/detail', player.email];
        
        this.router.navigate(link);
    }
    
 }
