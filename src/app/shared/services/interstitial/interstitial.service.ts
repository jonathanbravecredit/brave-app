import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterstitialService {
  open$ = new BehaviorSubject(false);
  message$: BehaviorSubject<string> = new BehaviorSubject('...loading');

  constructor() {}

  changeMessage(msg: string): void {
    this.message$.next(msg);
  }

  openInterstitial(): void {
    this.open$.next(true);
  }

  closeInterstitial(): void {
    this.open$.next(false);
  }
}
