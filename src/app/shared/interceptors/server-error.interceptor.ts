import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private interstitial: InterstitialService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (evt) => {
          if (evt instanceof HttpResponse) {
            console.log('intercepting httpresponse 1');
            this.interstitial.closeInterstitial();
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            console.log('intercepting error');
            this.interstitial.closeInterstitial();
          }
        },
      ),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        // if (error.status === 401) {
        //   // refresh token
        // } else {
        //   return throwError(error);
        // }
        return throwError(error);
      }),
    );
  }
}
