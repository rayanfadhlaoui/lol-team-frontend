import { Component} from '@angular/core';
import { Http} from '@angular/http';
import { Summoner } from '../services/summoner';
import { TeamService } from '../services/team.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Team } from '../services/team';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-team',
  templateUrl: './my-team.html',
  styleUrls: ['./my-team.css']
})
export class MyTeamComponent implements OnInit {

  constructor(public teamService: TeamService) {}

  team: Team;
  summonerIdBeingImported: number;

  ngOnInit(): void {
    this.summonerIdBeingImported = null;
    const userId = Number(localStorage.getItem('id_token'));
    this.teamService.loadTeam(userId).subscribe(
      res => {
        this.team = res;
      },
      err => {
        alert('wtf papi ?');
      }
    );
  }

  importGames(summoner: Summoner): void {
    this.summonerIdBeingImported = summoner.id;
    const userId = Number(localStorage.getItem('id_token'));
    this.teamService.importGames(summoner, userId).subscribe(
      res => {
        summoner = res;
        this.updateTeam(summoner);
      },
      err => {
        alert('wtf papi ?');
      }
    );
  }

  private updateTeam(newSummoner: Summoner) {
    let index = 0;
    let count = 0;
    this.team.summoners.forEach(summoner => {
      if (summoner.id === newSummoner.id) {
        index = count;
      }
      count++;
    });

    this.team.summoners[index] = newSummoner;
  }
}
