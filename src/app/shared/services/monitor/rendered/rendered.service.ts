import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export enum RenderedViews {
  Authentication = 'authentication',
  Dashboard = 'dashboard',
  Onboarding = 'onboarding',
  Suspended = 'suspended',
  Compliance = 'compliance',
}

@Injectable({
  providedIn: 'root',
})
export class RenderedService {
  tracker: Set<string> = new Set();
  checked: boolean = false;

  constructor(private zone: NgZone) {
    // this is good enough for now. Some library has pending macrotasks I can't identify
    // once the micro tasks empty at least once the app should rendered already
    // so by then we should know if something went wrong
    if (!this.checked) this.checkStatus();
  }

  track({ tag, el }: { tag: RenderedViews | null; el: any }) {
    if (!tag) return;
    this.tracker.add(tag);
  }

  checkStatus(): void {
    this.checked = true;
    if (this.tracker.size === 0) throw new Error('Missing at least 1 critical view rendered');
  }
}
