import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterstitialService {
  open$ = new BehaviorSubject(false);
  message$: BehaviorSubject<string> = new BehaviorSubject('...loading');
  fetching$ = new BehaviorSubject<boolean>(false);
  renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  changeMessage(msg: string): void {
    this.message$.next(msg);
  }

  openInterstitial(): void {
    if (this.open$.value) return; // already open;
    this.open$.next(true);
  }

  closeInterstitial(): void {
    if (!this.open$.value) return; // already closed;
    this.open$.next(false);
  }

  startSpinner(): void {
    this.renderer.addClass(document.body, 'brave-waiting-cursor');
  }

  stopSpinner(): void {
    this.renderer.removeClass(document.body, 'brave-waiting-cursor');
  }
}
