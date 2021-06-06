import { Component, OnInit } from '@angular/core';
import { APIService } from '@shared/services/aws/api.service';
import { ZenObservable } from 'zen-observable-ts';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data';
import { AppDataStateModel } from '@store/app-data';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brave-app';

  // user: CognitoUserInterface | undefined;
  // authState: AuthState = {} as AuthState;
  // apiCreateListener$: ZenObservable.Subscription;
  // apiUpdateListener$: ZenObservable.Subscription;
  // apiDeleteListener$: ZenObservable.Subscription;

  constructor(private store: Store) {}

  ngOnDestroy() {
    // if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
    // if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
    // if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  }

  syncUpDBandState(payload: AppDataStateModel): void {
    this.store.dispatch(new AppDataActions.Edit(payload));
  }
}
