import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from '@aws-amplify/core';
import { Store } from '@ngxs/store';
import {
  APIService,
  CreateAppDataInput,
  CreateAppDataMutation,
  GetAppDataQuery,
} from '@shared/services/aws/api.service';
import * as AppDataActions from '@store/app-data/app-data.actions';
import { AppDataStateModel } from '@store/app-data';
import { deleteKeyNestedObject } from '@shared/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  constructor(
    private api: APIService,
    private store: Store,
    private router: Router
  ) {}

  /**
   * Hall monitor. Checks the user and tells them where to go when they come back
   *   to the app for the first and subsequent times.
   * @returns
   */
  async hallmonitor(creds: ICredentials): Promise<void> {
    console.log('calling hallmonitor');
    const { identityId: id } = creds;
    // check if db has data
    const data = await this.api.GetAppData(id);
    const clean = this.cleanBackendData(data);
    console.log('clean data', clean);

    if (!data) {
      // new user...seed database
      await this.initAppData({ identityId: id } as ICredentials);
      this.router.navigate(['/onboarding/name']);
      return;
    } else {
      // existing user...check where last left off
      const payload: AppDataStateModel = { ...clean } as AppDataStateModel;
      this.store
        .dispatch(new AppDataActions.Add(payload))
        .subscribe((state: { appData: AppDataStateModel }) => {
          console.log('data being updated to state', state);
          if (state.appData.user?.onboarding?.lastComplete === 3) {
            this.router.navigate(['/dashboard/']);
          } else {
            switch (state.appData.user?.onboarding?.lastComplete) {
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
                this.router.navigate(['/dashboard/']);
                break;
            }
          }
        });
    }
  }

  /**
   *
   * @param {ICredentials} creds
   */
  async initAppData(
    creds: ICredentials
  ): Promise<CreateAppDataMutation | undefined> {
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
    };
    try {
      const data = await this.api.CreateAppData(input);
      return data;
    } catch (err) {
      console.log('initApp error', err);
      return;
    }
  }

  cleanBackendData(data: GetAppDataQuery): AppDataStateModel {
    let clean = deleteKeyNestedObject(data, '__typename');
    delete clean.createdAt; // this is a graphql managed field
    delete clean.updatedAt; // this is a graphql managed field
    return clean;
  }
}
