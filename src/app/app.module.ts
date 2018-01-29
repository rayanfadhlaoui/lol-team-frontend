import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MyTeamModule } from './myTeam/general/my-team.module';

@NgModule({
  imports : [
    HomeModule,
    AppRoutingModule,
    LoginModule,
    MyTeamModule,
    CommonModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
