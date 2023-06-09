import { ApplicationRef, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '@environments/environment';

export enum RenderedViews {
  Main = 'main',
  Authentication = 'authentication',
  Dashboard = 'dashboard',
  Onboarding = 'onboarding',
  Suspended = 'suspended',
  Compliance = 'compliance',
  App = 'app',
}

@Injectable({
  providedIn: 'root',
})
export class RenderedService implements OnDestroy {
  tracker: Set<string> = new Set();
  checked: boolean = false;
  stable$: Subscription;

  constructor(private appRef: ApplicationRef) {
    this.stable$ = this.appRef.isStable.subscribe((s) => {
      if (s) {
        this.checkStatus();
      }
    });
  }

  ngOnDestroy(): void {
    this.stable$.unsubscribe();
  }

  track({ tag, el }: { tag: RenderedViews | null; el: any }) {
    if (!tag) return;
    this.tracker.add(tag);
  }

  checkStatus(): void {
    this.checked = true;
    if (environment.production) {
      if (this.tracker.size === 0) console.warn('Missing at least 1 critical view rendered');
    }
  }
}
