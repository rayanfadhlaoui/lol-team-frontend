import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports : [
    HomeModule,
    AppRoutingModule,
    LoginModule,
    CommonModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
