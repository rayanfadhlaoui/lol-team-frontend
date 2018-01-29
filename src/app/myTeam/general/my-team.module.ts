import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from '../services/team.service';
import { MyTeamFormComponent } from '../form/my-team-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyTeamComponent, MyTeamFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MyTeamRoutingModule, FormsModule
  ],
  providers: [TeamService],
  bootstrap: [MyTeamComponent]
})
export class MyTeamModule { }
