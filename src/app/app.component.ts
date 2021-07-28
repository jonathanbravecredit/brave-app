import { Component } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { APIService } from '@shared/services/aws/api.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brave-app';
  spinner$: Observable<boolean>;
  message$: Observable<string>;

  // inject app monitoring services and auth service
  constructor(private api: APIService, private auth: AuthService, private interstitial: InterstitialService) {
    this.spinner$ = this.interstitial.open$.asObservable();
    this.message$ = this.interstitial.message$.asObservable();
  }
}
