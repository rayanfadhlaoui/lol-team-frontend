import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from '../services/team.service';
import { MyTeamFormComponent } from '../form/my-team-form.component';
import { FormsModule } from '@angular/forms';
import { MyTeamSummonerComponent } from '../my-team-summoner/my-team-summoner.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MyTeamComponent, MyTeamFormComponent, MyTeamSummonerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MyTeamRoutingModule, FormsModule, SharedModule
  ],
  providers: [TeamService],
  bootstrap: [MyTeamComponent]
})
export class MyTeamModule { }
