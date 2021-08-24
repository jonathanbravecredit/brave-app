import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { AuthService } from '@shared/services/auth/auth.service';
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
      const creds: ICredentials = await Auth.currentUserCredentials();
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          if (creds) {
            this.interstitial.changeMessage(' ');
            this.interstitial.openInterstitial();
            await this.sync.initUser(creds);
            await this.sync.subscribeToListeners(creds.identityId);
            await this.sync.onboardUser(creds, true);
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

    Auth.currentAuthenticatedUser()
      .then(async (user) => {
        const creds: ICredentials = await Auth.currentUserCredentials();
        if (creds) {
          await this.sync.initUser(creds);
          await this.sync.subscribeToListeners(creds.identityId);
          await this.sync.onboardUser(creds, true);
        }
      })
      .catch(() => console.log('Not signed in'));
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      } else if (event instanceof NavigationEnd) {
      }
    });
  }
}
