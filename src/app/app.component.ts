import { Component, OnInit } from '@angular/core';
import { ICredentials } from '@aws-amplify/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'brave-app';

  // user: CognitoUserInterface | undefined;
  // authState: AuthState = {} as AuthState;
  // apiCreateListener$: ZenObservable.Subscription;
  // apiUpdateListener$: ZenObservable.Subscription;
  // apiDeleteListener$: ZenObservable.Subscription;

  constructor(private auth: AuthService, private sync: SyncService) {}

  async ngOnInit(): Promise<void> {
    const creds: ICredentials = await this.auth.getCurrentUserCredentials();
    if (creds) await this.sync.hallmonitor(creds);
  }

  // ngOnDestroy() {
  //   if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
  //   if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
  //   if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  // }
}
