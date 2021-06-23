import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ICredentials } from '@aws-amplify/core';
import { Store } from '@ngxs/store';
import {
  APIService,
  CreateAppDataInput,
  CreateAppDataMutation,
  GetAppDataQuery,
  UpdateAppDataInput,
} from '@shared/services/aws/api.service';
import * as AppDataActions from '@store/app-data/app-data.actions';
import { AppDataSelectors, AppDataStateModel } from '@store/app-data';
import { deleteKeyNestedObject } from '@shared/utils/utils';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  // apiCreateListener$: ZenObservable.Subscription;
  // apiUpdateListener$: ZenObservable.Subscription;
  // apiDeleteListener$: ZenObservable.Subscription;
  constructor(
    private api: APIService,
    private store: Store,
    private router: Router
  ) {
    // this.apiCreateListener$ = this.api.OnCreateAppDataListener.subscribe(
    //   (resp: any) => {
    //     // bad data type defined for response...see this issue: https://github.com/aws-amplify/amplify-cli/issues/5284
    //     // const data: any = resp.value?.data?.onCreateAppData;
    //     // console.log('on create listener', data);
    //   }
    // );
    // this.apiUpdateListener$ = this.api.OnUpdateAppDataListener.subscribe(
    //   (resp: any) => {
    //     // update state
    //     // const data: any = resp.value?.data?.onUpdateAppData;
    //     // console.log('on update listener', data);
    //   }
    // );
    // this.apiDeleteListener$ = this.api.OnDeleteAppDataListener.subscribe(
    //   (resp: any) => {
    //     // const data: any = resp.value?.data?.onDeleteAppData;
    //     // console.log('on create listener', data);
    //   }
    // );
  }

  /**
   * Hall monitor. Checks the user and tells them where to go when they come back
   *   to the app for the first and subsequent times.
   *   Called when:
   *    1. User signs in
   *    2. User refreshes (and auth service reinitiates via Auth.currentCredentials())
   * @returns
   */
  async hallmonitor(creds: ICredentials): Promise<void> {
    console.log('calling hallmonitor');
    const { identityId: id } = creds;
    console.log('id', id);
    const data = await this.api.GetAppData(id); // check database for data
    if (!data) {
      // new user...seed database...and send them to onboarding
      await this.initAppData({ identityId: id } as ICredentials);
      this.routeUser(-1);
    } else {
      // existing user...check where last left off
      this.syncDBDownToState(id).then((state: AppDataStateModel) => {
        console.log('synching database to state', state);
        const lastComplete = state.user?.onboarding?.lastComplete || -1;
        this.routeUser(lastComplete);
      });
    }
  }

  /**
   * Seed the database with the basic credentials when the user signs up
   * @param {ICredentials} creds
   */
  async initAppData(
    creds: ICredentials
  ): Promise<CreateAppDataMutation | undefined> {
    try {
      const input: CreateAppDataInput = {
        id: creds.identityId,
        user: {
          id: creds.identityId,
          onboarding: {
            lastActive: 0,
            lastComplete: -1,
            started: true,
          },
        },
        agencies: {
          transunion: { authenticated: false },
          experian: { authenticated: false },
          equifax: { authenticated: false },
        },
        preferences: {
          showAllAccounts: {
            hideCreditCardAccounts: false,
            hideCollectionsAccounts: false,
            hideInstallmentAccounts: false,
            hideMortgageAccounts: false
          }
        }
      };
      console.log('input', input);
      const data = await this.api.CreateAppData(input);
      const clean = this.cleanBackendData(data);
      await this.store.dispatch(new AppDataActions.Add(clean));
      return data;
    } catch (err) {
      console.log('initApp error', err);
      return;
    }
  }

  /**
   * Takes the last completed step by the user and routes them to
   *   where they left off if they haven't finishd onboarding
   * @param {number} lastComplete
   */
  routeUser(lastComplete: number): void {
    switch (lastComplete) {
      case -1:
        this.router.navigate(['/onboarding/name']);
        break;
      case 0:
        this.router.navigate(['/onboarding/address']);
        break;
      case 1:
        this.router.navigate(['/onboarding/identity']);
        break;
      case 2:
        this.router.navigate(['/onboarding/verify']);
        break;
      default:
        // nothing to do, stay on same route
        break;
    }
  }

  /**
   * Update the state with updated db data
   *   - will use the provided state or if none provided,
   *     will select the state from the DB
   * @param {string} id user id
   * @param {AppDataStateModel} payload (optional)
   */
  async syncDBDownToState(
    id: string,
    payload?: AppDataStateModel
  ): Promise<AppDataStateModel> {
    console.log('payload in sync db', payload);
    if (payload) {
      console.log('editing state with provided payload');
      this.store.dispatch(new AppDataActions.Edit(payload));
      return payload;
    }
    // no payload need to get the id
    try {
      const raw = await this.api.GetAppData(id);
      const data = this.cleanBackendData(raw);
      return new Promise((resolve, reject) => {
        this.store.dispatch(new AppDataActions.Edit(data)).subscribe((_) => {
          resolve(data);
        });
      });
    } catch (err) {
      throw 'Error syncing db to state';
    }
  }

  cleanBackendData(data: GetAppDataQuery): AppDataStateModel {
    let clean = deleteKeyNestedObject(data, '__typename');
    delete clean.createdAt; // this is a graphql managed field
    delete clean.updatedAt; // this is a graphql managed field
    delete clean.owner; // this is a graphql managed field
    return clean;
  }
}
