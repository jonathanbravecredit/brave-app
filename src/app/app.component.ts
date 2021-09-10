import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js';
import { APIService } from '@shared/services/aws/api.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'brave-app';
  spinner$: Observable<boolean>;
  message$: Observable<string>;

  // inject app monitoring services and auth service
  constructor(
    private api: APIService,
    private router: Router,
    private sync: SyncService,
    private interstitial: InterstitialService,
  ) {
    this.spinner$ = this.interstitial.open$.asObservable();
    this.message$ = this.interstitial.message$.asObservable();

    Hub.listen('auth', async (data) => {
      console.log('auth hub events ===? ', data);
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          console.log('signIn called');
          const provider = window.sessionStorage.getItem('braveOAuthProvider');
          if (provider) return; // handled in redirect
          const creds: CognitoUser = await Auth.currentAuthenticatedUser();
          const attrs = await Auth.userAttributes(creds);
          const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
          if (id) {
            this.interstitial.changeMessage(' ');
            this.interstitial.openInterstitial();
            await this.sync.initUser(id);
            await this.sync.subscribeToListeners(id);
            await this.sync.onboardUser(id, true);
            this.interstitial.closeInterstitial();
          }
          break;
        case 'signOut':
          this.router.navigate(['/auth/signin']);
          // handle sign out
          break;
        default:
          // do something by default
          break;
      }
    });

    Hub.listen('api', async (data) => {
      console.log('api hub events ===> ', data);
    });

    (async () => {
      console.log('calling app component auth again');
      try {
        const provider = window.sessionStorage.getItem('braveOAuthProvider');
        if (provider) return; // handled in redirect
        const creds: CognitoUser = await Auth.currentAuthenticatedUser();
        const attrs = await Auth.userAttributes(creds);
        const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
        if (id) {
          await this.sync.initUser(id);
          await this.sync.subscribeToListeners(id);
          await this.sync.onboardUser(id, true);
        }
      } catch (err) {
        console.log('Not signed in');
      }
    })();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
        this.interstitial.fetching$.next(false);
      }
    });
  }
}
