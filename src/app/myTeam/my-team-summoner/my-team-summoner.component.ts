import { Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TeamService } from '../services/team.service';
import { Team } from '../services/team';
import { Summoner } from '../services/summoner';
import { DatePipe } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-team-summoner',
  templateUrl: './my-team-summoner.html',
  styleUrls: ['../general/my-team.css', 'my-team-summoner.css'],
  providers: [DatePipe]
})
export class MyTeamSummonerComponent implements OnInit {
  isLoading: boolean;
  timer;

  constructor(private datePipe: DatePipe, public teamService: TeamService) {}

  @Input() summoner: Summoner;

  ngOnInit(): void {
    this.refreshImportedGames();
  }

  refreshImportedGames(): void {
    if (this.summoner.totalGames !== this.summoner.totalImportedGames) {
      this.timer = setInterval(() => {
        this.teamService.getNbGamesImported(this.summoner).subscribe(
          res => {
            this.summoner.totalImportedGames = res;
            if (this.summoner.totalImportedGames === this.summoner.totalGames) {
              clearInterval(this.timer);
            }
          },
          err => {
            alert('wtf papi ?');
          }
        );
      }, 10000);
    }
  }

  isLoadingFunc(): boolean {
    if (this.isLoading) {
      return true;
    }
    const totalImportedGames = this.summoner.totalImportedGames;
    if (totalImportedGames !== null || this.summoner.totalGames !== null) {
      return totalImportedGames !== this.summoner.totalGames;
    }
    return false;
  }

  displayLastUpdate(): string {
    return this.summoner.lastUpdate != null ? this.datePipe.transform(this.summoner.lastUpdate, 'yyyy-MM-dd') : 'N/A';
  }

  displayTotalImportedGames(): number {
    const totalImportedGames = this.summoner.totalImportedGames;
    return totalImportedGames != null ? totalImportedGames : 0;
  }

  importGames(): void {
    this.isLoading = true;
    const userId = Number(localStorage.getItem('id_token'));
    this.teamService.importGames(this.summoner, userId).subscribe(
      summoner => {
        this.summoner = summoner;
        this.isLoading = false;
        this.refreshImportedGames();
      },
      err => {
        alert('wtf papi ?');
      }
    );
  }

}
