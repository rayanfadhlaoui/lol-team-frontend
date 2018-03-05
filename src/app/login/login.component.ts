import { AuthService } from "./auth.service";
import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

import { errors } from "./../utils/errors";

@Component({
  templateUrl: "./login.html",
  styleUrls: ["./login.css"]
})
export class LoginComponent {
  netImage: any = "assets/images/Arcade-Riven.png";
  messageError: string;
  user = { username: "", password: "" };

  constructor(public authService: AuthService, public router: Router) {}

  login() {
    const sub = this.authService.login(this.user).subscribe(res => {
      const userReturn = res.json();
      if (userReturn.id !== -1) {
        this.authService.loggedIn(userReturn.id);
        const redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : "/home";

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: "preserve",
          preserveFragment: true
        };
        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      } else {
        this.messageError = "Username or password is incorrect";
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
