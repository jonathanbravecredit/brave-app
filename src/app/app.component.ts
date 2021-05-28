import { Component, OnInit } from '@angular/core';
import {
  APIService,
  OnCreateAppDataSubscription,
  SubscriptionResponse,
} from '@shared/services/aws/api.service';
import { ZenObservable } from 'zen-observable-ts';
import { Store } from '@ngxs/store';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'brave-app';

  // user: CognitoUserInterface | undefined;
  // authState: AuthState = {} as AuthState;
  apiCreateListener$: ZenObservable.Subscription;
  apiUpdateListener$: ZenObservable.Subscription;
  apiDeleteListener$: ZenObservable.Subscription;

  constructor(private api: APIService, private store: Store) {
    this.apiCreateListener$ = this.api.OnCreateAppDataListener.subscribe(
      (resp: SubscriptionResponse<OnCreateAppDataSubscription>) => {
        // // create state
        // const appData: AppData = { ...value };
        // this.store.dispatch(new AppDataActions.Add(value));
        console.log('on create listener', resp.value.data);
      }
    );
    this.apiUpdateListener$ = this.api.OnUpdateAppDataListener.subscribe(
      (resp) => {
        // update state
        console.log('on update listener', resp);
      }
    );
    this.apiDeleteListener$ = this.api.OnDeleteAppDataListener.subscribe(
      (resp) => {
        // delete state
        console.log('on delete listener', resp);
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
    if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
    if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  }
}
