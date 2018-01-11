import { AuthGuard } from '../login/auth-guard.service';
import { AuthService } from '../login/auth.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const homeRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  providers: [
   AuthGuard, AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
