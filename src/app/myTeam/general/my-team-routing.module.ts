import { MyTeamComponent } from './my-team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../login/auth-guard.service';
import { AuthService } from '../../login/auth.service';


const myTeamRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forChild(myTeamRoutes)
  ],
  providers: [
   AuthGuard, AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class MyTeamRoutingModule { }
