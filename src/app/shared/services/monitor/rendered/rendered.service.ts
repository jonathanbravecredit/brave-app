import { Injectable } from '@angular/core';

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

  constructor() {}

  track({ tag, el }: { tag: RenderedViews | null; el: any }) {
    if (!tag) return;
    this.tracker.add(tag);
    console.log('view', tag);
  }
}
