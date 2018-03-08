import { contentHeaders } from '../common/headers';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  error: null;

  constructor(public router: Router, public http: HttpClient) {}

  login(user): Observable<any> {
   return this.http.post('http://localhost:8080/sessions/create', user);
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
