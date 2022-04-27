import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EventKeys } from '@shared/services/broadcast/broadcast.model';
import { BroadcastService } from '@shared/services/broadcast/broadcast.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class NavigatorService implements OnDestroy {
  private eventSub$: Subscription;
  constructor(private router: Router, broadcastService: BroadcastService) {
    _.bindAll(this, 'onNavigationEvent');
    this.eventSub$ = broadcastService.on(EventKeys.NAVIGATION).subscribe(this.onNavigationEvent);
  }

  onNavigationEvent(data: string) {
    this.router.navigate([data]);
  }

  ngOnDestroy(): void {
    this.eventSub$.unsubscribe();
  }
}
