import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export enum RenderedViews {
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
export class RenderedService {
  tracker: Set<string> = new Set();
  checked: boolean = false;

  constructor() {}

  track({ tag, el }: { tag: RenderedViews | null; el: any }) {
    if (!tag) return;
    this.tracker.add(tag);
  }

  checkStatus(): void {
    this.checked = true;
    if (this.tracker.size === 0) throw new Error('Missing at least 1 critical view rendered');
  }
}
