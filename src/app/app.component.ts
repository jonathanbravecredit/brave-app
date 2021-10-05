import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Hub } from '@aws-amplify/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Observable } from 'rxjs';
import { InitService } from '@shared/services/init/init.service';

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
  constructor(private router: Router, private init: InitService, private interstitial: InterstitialService) {
    this.spinner$ = this.interstitial.open$.asObservable();
    this.message$ = this.interstitial.message$.asObservable();

    Hub.listen('auth', async (data) => {
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          // const provider = window.sessionStorage.getItem('braveOAuthProvider');
          // if (provider) return; // handled in redirect
          await this.init.resolver();
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

    Hub.listen('api', async (data) => {});

    (async () => {
      try {
        // const provider = window.sessionStorage.getItem('braveOAuthProvider');
        // if (provider) return; // handled in redirect
        await this.init.resolver();
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
