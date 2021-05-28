import { Component, OnInit } from '@angular/core';
import {
  APIService,
  OnCreateAppDataSubscription,
  OnUpdateAppDataSubscription,
  SubscriptionResponse,
} from '@shared/services/aws/api.service';
import { ZenObservable } from 'zen-observable-ts';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data';
import { AppDataStateModel } from '@store/app-data';

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
      (resp: any) => {
        // bad data type defined for response...see this issue: https://github.com/aws-amplify/amplify-cli/issues/5284
        const data: any = resp.value?.data?.onCreateAppData;
        if (data) {
          console.log('data', data);
          const appData: AppDataStateModel = { ...data } as AppDataStateModel;
          console.log('appData', appData);
          this.store.dispatch(new AppDataActions.Add(appData));
          console.log('on create listener', resp.value.data);
        }
      }
    );
    this.apiUpdateListener$ = this.api.OnUpdateAppDataListener.subscribe(
      (resp: SubscriptionResponse<OnUpdateAppDataSubscription>) => {
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
