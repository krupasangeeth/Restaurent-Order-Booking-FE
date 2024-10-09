import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginUserIntercepterService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let mobile: any = sessionStorage.getItem('mobile');
    if (mobile == null) {
      mobile = '';
    }
    let modifiedReq = req.clone({
      headers: req.headers
        .append('mobile', mobile)
        .append('Content-Type', 'application/json'),
    });
    console.log(mobile);
    console.log(modifiedReq);
    return next.handle(modifiedReq);
  }
}
