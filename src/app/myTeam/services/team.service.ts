import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Team } from './team';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TeamService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(public http: HttpClient) {}

  loadTeam(userId: number): Observable<any> {
    return this.http.post('http://localhost:8080/lol-team/myTeam/findTeam', userId);
  }

  addSummonerToTeam(team: Team, summonerName: string): Observable<any> {
    const params = {
      team: team,
      summonerName: summonerName
    };
    return this.http.post('http://localhost:8080/lol-team/myTeam/addSummonerToTeam', params);
  }

}
