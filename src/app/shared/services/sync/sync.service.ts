import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  APIService,
  UpdateAppDataInput,
} from '@shared/services/aws/api.service';
import * as AppDataAction from '@store/app-data/app-data.actions';
// import * as subscriptions from '@src/graphql/subscriptions.graphql';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  constructor(private store: Store, private api: APIService) {}

  syncStateToBackend(): void {
    const state = this.store.snapshot();
    const input = { ...state.appData } as UpdateAppDataInput;
    console.log('data to input', input);
    this.api
      .UpdateAppData(input)
      .then((res) => {
        console.log('graphql res ===> ', res);
      })
      .catch((err) => {
        console.log('graphql err ===> ', err);
      });
  }

  syncBackendToState(): void {
    const { state } = this.store.snapshot();
    const { id } = { ...state.appData } as UpdateAppDataInput;
    this.api
      .GetAppData(id)
      .then((res) => {
        this.store.dispatch(new AppDataAction.Edit(res));
        console.log('graphql res ===> ', res);
      })
      .catch((err) => {
        console.log('graphql err ===> ', err);
      });
  }
}
