import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { headers } from "../common/headers";

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  error: null;

  constructor(public router: Router, public http: HttpClient) {}

  public login(user): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post(
      "http://localhost:8080/lol-team/sessions/create",
      body,
      headers
    );
  }

  public loginError(error): void {
    this.error = error;
  }

  public loggedIn(id): void {
    this.isLoggedIn = true;
    localStorage.setItem("id_token", id);
  }

  public logout(): void {
    this.isLoggedIn = false;
  }

  public getToken(): string {
    return localStorage.getItem("id_token");
  }
}
