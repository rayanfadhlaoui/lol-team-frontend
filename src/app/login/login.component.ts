import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

@Component({
   templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {
  netImage: any = 'images/Arcade-Riven.png';
  messageError: string;
  user = {'username' : '', 'password': '' };

  constructor(public authService: AuthService, public router: Router) {
  }

  login() {
    alert(this.authService.redirectUrl);
    const sub = this.authService.login(this.user).subscribe(
      res => {
        const userReturn = res.json();
        if (userReturn.id !== -1) {
          this.authService.loggedIn(userReturn.id);
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

          const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
          };
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        } else {
          this.messageError = 'Username or password is incorrect';
        }
      },
      error => {
        console.log(error.text());
      });
  }

  logout() {
    this.authService.logout();
  }
}
