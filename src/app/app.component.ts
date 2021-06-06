import { Component, OnInit } from '@angular/core';
import { APIService } from '@shared/services/aws/api.service';
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
        console.log('on create listener', data);
        if (data) {
          const payload: AppDataStateModel = { ...data } as AppDataStateModel;
          this.syncUpDBandState(payload);
        }
      }
    );
    this.apiUpdateListener$ = this.api.OnUpdateAppDataListener.subscribe(
      (resp: any) => {
        // update state
        const data: any = resp.value?.data?.onUpdateAppData;
        console.log('on update listener', data);
        if (data) {
          const payload: AppDataStateModel = { ...data } as AppDataStateModel;
          this.syncUpDBandState(payload);
        }
      }
    );
    this.apiDeleteListener$ = this.api.OnDeleteAppDataListener.subscribe(
      (resp: any) => {
        const data: any = resp.value?.data?.onDeleteAppData;
        console.log('on create listener', data);
        if (data) {
          const payload: AppDataStateModel = { ...data } as AppDataStateModel;
          this.syncUpDBandState(payload);
        }
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
    if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
    if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  }

  syncUpDBandState(payload: AppDataStateModel): void {
    this.store.dispatch(new AppDataActions.Edit(payload));
  }
}
