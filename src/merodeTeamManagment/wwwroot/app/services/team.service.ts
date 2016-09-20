import { IPlayer } from '../model/IPlayer';
import { Injectable }    from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";

@Injectable()
export class TeamService {

  private heroesUrl = '/api/player';  // URL to web api

  private liteUrl = "http://localhost:3000";
  constructor(private http: Http) { 
    if (window.location.href.startsWith(this.liteUrl)){
      this.heroesUrl = "http://localhost:5000" + this.heroesUrl;
    }
  }

  getPlayers(teamName:string):Promise<IPlayer[]>{
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getPlayer(name: string) {
    return this.getPlayers('merode')
               .then(players => players.filter(player => player.name === name)[0]);
  }

  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
