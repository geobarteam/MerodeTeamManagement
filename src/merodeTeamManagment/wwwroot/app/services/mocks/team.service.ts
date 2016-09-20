import { IPlayer } from '../../model/IPlayer';
import { Injectable }    from '@angular/core';

@Injectable()
export class TeamService {

    getPlayers(teamName: string): Promise<IPlayer[]> {
        return new Promise<IPlayer[]>((resolve, rejected) => {
            var players = new Array<IPlayer>();
            players.push({ name: "Geoffrey" });
            players.push({ name: "Tanguy" });
            players.push({ name: "Ben" });
            resolve(players);
        });
    }

    getPlayer(name: string) {
        return this.getPlayers('merode')
            .then(players => players.filter(player => player.name === name)[0]);
    }
    
}
