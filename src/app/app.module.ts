import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import './utils/rxjs-operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MyTeamModule } from './myTeam/general/my-team.module';
import { APIHttpInterceptor } from './common/api/httpinterceptor';

@NgModule({
  imports: [
    HomeModule,
    AppRoutingModule,
    LoginModule,
    MyTeamModule,
    CommonModule,
    SharedModule
  ],
/*  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIHttpInterceptor,
      multi: true
    }
  ],*/
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
