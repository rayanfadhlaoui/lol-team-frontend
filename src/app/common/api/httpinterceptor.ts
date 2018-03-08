import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../login/auth.service';
import { errors } from './../../utils/errors';

@Injectable()
export class APIHttpInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();

    if (typeof token !== 'undefined') {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next
      .handle(request)
      .do((event: HttpEvent<any>) => {})
      .catch((err: any) => {
        if (errors.http[err.name]) {
          this.auth.loginError(errors.http[err.name]);
        }

        return Observable.throw(err);
      });
  }
}
