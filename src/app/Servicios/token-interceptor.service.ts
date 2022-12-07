import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authService: ApiService) { }
  
  intercept(req: any, next: any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        'x-access-token': `${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)

  }

}
