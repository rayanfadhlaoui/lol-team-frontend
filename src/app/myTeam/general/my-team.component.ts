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

  ngOnInit(): void {
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
    this.teamService.importGames(summoner).subscribe(
      res => {
        alert('yes papi ?');
      },
      err => {
        alert('wtf papi ?');
      }
    );
  }
}
