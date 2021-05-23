import { AccountService } from './../service/account.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const TOKEN_HEADER_KEY = 'x-access-token';
@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private accountService:AccountService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.accountService.getToken();

    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) ,
      setHeaders: {
        Authorization: `Bearer ${ this.accountService.getToken()}`
      }

    });
    }

    return next.handle(authReq);
}


}
