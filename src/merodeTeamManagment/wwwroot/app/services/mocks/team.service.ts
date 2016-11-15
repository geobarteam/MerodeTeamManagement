import { IPlayer } from '../../model/IPlayer';
import { Injectable }    from '@angular/core';

@Injectable()
export class TeamService {

    getPlayers(teamName: string): Promise<IPlayer[]> {
        return new Promise<IPlayer[]>((resolve, rejected) => {
            var players = new Array<IPlayer>();
            players.push({ firstName: "Geoffrey", lastName:"Vandiest", email:"gvd8@hotmail.com" });
            resolve(players);
        });
    }

    getPlayer(email: string) {
        return this.getPlayers('merode')
            .then(players => players.filter(player => player.email === email)[0]);
    }
    
}
