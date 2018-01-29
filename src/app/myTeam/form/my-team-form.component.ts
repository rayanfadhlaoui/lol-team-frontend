import { Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TeamService } from '../services/team.service';
import { Team } from '../services/team';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-team-form',
  templateUrl: './my-team-form.html',
  styleUrls: ['../general/my-team.css', 'my-team-form.css']
})
export class MyTeamFormComponent {

  summonerNameToAdd: string;
  errorMessage: string;

  constructor(public teamService: TeamService) {}

  @Input() team: Team;

  addSummonerToTeam() {
    this.teamService.addSummonerToTeam(this.team, this.summonerNameToAdd)
      .subscribe(
        res => {
          if (res === null) {
            this.errorMessage = 'Summoner named ' + this.summonerNameToAdd + ' doesn\'t exist';
          } else {
            this.team.summoners = res.summoners;
            this.summonerNameToAdd = '';
          }
        },
        err => {
          alert('I knew it ....');
        }
      );
  }
}
