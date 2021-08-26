import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private interstitial: InterstitialService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (evt) => {
          console.log('http evt ===> ', evt);
          if (evt instanceof HttpResponse) {
            this.interstitial.closeInterstitial();
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            this.interstitial.closeInterstitial();
          }
        },
      ),
    );
  }
}
