import { contentHeaders } from '../common/headers';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(public router: Router, public http: Http) {}

  login(user): Observable<any> {
   const body = JSON.stringify(user);
   return this.http.post('http://localhost:8080/destiny/sessions/create', body, { headers: contentHeaders });
  }

  loggedIn(id): void {
    this.isLoggedIn = true;
    localStorage.setItem('id_token', id);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
