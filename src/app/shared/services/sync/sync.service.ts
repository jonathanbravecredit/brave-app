import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
import { INIT_DATA } from '@shared/services/sync/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  data$: BehaviorSubject<AppDataStateModel> = new BehaviorSubject({} as AppDataStateModel);

  constructor(private api: APIService, private store: Store, private router: Router) {}

  /**
   * Hall monitor. Checks the user and tells them where to go when they come back
   *   to the app for the first and subsequent times.
   *   Called when:
   *    1. User signs in
   *    2. User refreshes (and auth service reinitiates via Auth.currentCredentials())
   * @returns
   */
  async hallmonitor(creds: ICredentials, signInEvent: boolean = false): Promise<void> {
    // user refreshes...on any other non-auth guarded route
    // user signsIn and is new user
    console.log('calling hallmonitor');
    const { identityId: id } = creds;
    // TODO: BETTER USE OF ROUND TRIP CALLS...USE SUBJECT
    // Handle new users
    // 1. No ID from Amplify to validate against...bail out
    // 2. Brand New User and signn event..initialize DB and go to dashboard
    // 3. Brand New User and NOT a signin event....initialize DB and go to dashboard
    const isUserBrandNew = await this.isUserBrandNew(id);
    if (isUserBrandNew === undefined) return;
    if (isUserBrandNew && signInEvent) {this.initAppData(creds);} // refreshed event
    if (isUserBrandNew && !signInEvent) this.initAppData(creds); // refreshed event

    // Handle returning users (implicit) !isUserBrandNew
    // 1. No ID from Amplify to validate against...bail out
    // 2. User has fully onboarded and a signin event...go to dashboard
    // 3. User has fully onboarded and NOT a signin event...stay put
    // 4. User has NOT fully onboarded and a signin event...go to last complete
    // 5. User has NOT fully onboarded and NOT a signin event...go to last complete
    const isUserOnboarded = await this.isUserOnboarded(id);
    if (isUserOnboarded === undefined) return;
    if (isUserOnboarded && signInEvent) this.goToDashboard(id);
    if (isUserOnboarded && !signInEvent) this.stayPut(id);
    if (!isUserOnboarded && signInEvent) this.goToLastOnboarded(id);
    if (!isUserOnboarded && !signInEvent) this.goToLastOnboarded(id);
  }

  /**
   * Takes the user ID and queries the database for any records
   * - returns whether the user is brand new or not (no data)
   * @param {string} id
   * @returns {Promise<boolean | undefined>}
   */
  async isUserBrandNew(id: string): Promise<boolean | undefined> {
    if (!id) return;
    const data = await this.api.GetAppData(id);
    const clean = this.cleanBackendData(data);
    this.data$.next(clean);
    return !data.id;
  }

  /**
   * Takes the user ID and queries the databse for any records
   * - returns whether the user has completed the onboarding steps
   * @param {string} id
   * @returns
   */
  async isUserOnboarded(id: string): Promise<boolean | undefined> {
    if (!id) return;
    const data = await this.api.GetAppData(id);
    const clean = this.cleanBackendData(data);
    this.data$.next(clean);
    return data.user?.onboarding?.lastComplete === 3;
  }

  /**
   * Takes the user ID and syncs the state to the DB.
   * - Navigates to the dashboard init screen
   * @param {string} id
   */
  async goToDashboard(id: string): Promise<void> {
    const data = await this.syncDBDownToState(id);
    this.router.navigate(['/dashboard/init']);
  }

  /**
   * Takes the ID and syncs the state to the DB.
   * - Navigates to the last completed onboarding step
   * @param {string} id
   */
  async goToLastOnboarded(id: string): Promise<void> {
    const data = await this.syncDBDownToState(id);
    const lastComplete = data.user?.onboarding?.lastComplete || -1;
    this.routeUser(lastComplete);
  }

  /**
   * Takes the ID and syncs the state to the DB.
   * - Stays on the same url
   * @param {string} id
   */
  async stayPut(id: string): Promise<void> {
    await this.syncDBDownToState(id);
  }

  /**
   * Seed the database with the basic credentials when the user signs up
   * @param {ICredentials} creds
   */
  async initAppData(creds: ICredentials): Promise<void> {
    try {
      const input: CreateAppDataInput = {
        ...INIT_DATA,
        id: creds.identityId,
        user: {
          ...INIT_DATA.user,
          id: creds.identityId,
        },
      };
      const data = await this.api.CreateAppData(input);
      const clean = this.cleanBackendData(data);
      this.store.dispatch(new AppDataActions.Add(clean)).subscribe((_) => {
        this.data$.next(clean);
        this.routeUser(-1);
      });
    } catch (err) {
      throw new Error(`Error in syncService:InitAppData=${JSON.stringify(err)}`);
    }
  }

  /**
   * Takes the last completed step by the user and routes them to
   *   where they left off if they haven't finishd onboarding
   *   Applies only if they have not completed onboarding
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
  async syncDBDownToState(id: string, payload?: AppDataStateModel): Promise<AppDataStateModel> {
    if (payload) {
      this.store.dispatch(new AppDataActions.Edit(payload));
      return payload;
    }
    // no payload need to get the id
    try {
      const raw = await this.api.GetAppData(id);
      const clean = this.cleanBackendData(raw);
      return new Promise((resolve, reject) => {
        this.store.dispatch(new AppDataActions.Edit(clean)).subscribe((_) => {
          this.data$.next(clean);
          resolve(clean);
        });
      });
    } catch (err) {
      throw 'Error syncing db to state';
    }
  }

  /**
   * Removes the '__typename' fields from query results
   * @param {GetAppDataQuery} data
   * @returns
   */
  cleanBackendData(data: GetAppDataQuery): AppDataStateModel {
    let clean = deleteKeyNestedObject(data, '__typename');
    delete clean.createdAt; // this is a graphql managed field
    delete clean.updatedAt; // this is a graphql managed field
    delete clean.owner; // this is a graphql managed field
    return clean;
  }
}
