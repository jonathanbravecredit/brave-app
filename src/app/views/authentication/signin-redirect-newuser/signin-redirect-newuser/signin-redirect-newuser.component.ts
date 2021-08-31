import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'brave-signin-redirect-newuser',
  templateUrl: './signin-redirect-newuser.component.html',
})
export class SigninRedirectNewuserComponent implements OnInit, OnDestroy, AfterViewInit {
  destroyed$ = new BehaviorSubject(false);
  constructor(private router: Router, private sync: SyncService, private interstitial: InterstitialService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
  ngAfterViewInit(): void {
    this.router.events.pipe(takeUntil(this.destroyed$)).subscribe((event) => {
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
        setTimeout(async () => {
          await this.onboardUser();
        }, 15000);
      }
    });
  }

  async onManualRedirectClick(): Promise<void> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    await this.onboardUser();
    this.interstitial.closeInterstitial();
  }

  async onboardUser(): Promise<void> {
    const user: CognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const attrs = await Auth.userAttributes(user);
    const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
    await this.sync.initUser(id);
    await this.sync.subscribeToListeners(id);
    await this.sync.onboardUser(id, true);
  }
}
