import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import {
  APIService,
  CreateAppDataInput,
  GetAppDataQuery,
  OnUpdateAppDataSubscription,
} from "@shared/services/aws/api.service";
import * as AppDataActions from "@store/app-data/app-data.actions";
import { AppDataStateModel } from "@store/app-data";
import { BehaviorSubject, Observable } from "rxjs";
import { ZenObservable } from "zen-observable-ts";
import * as queries from "@shared/queries";
import { StateService } from "@shared/services/state/state.service";
import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";
import { BraveUtil } from "@shared/utils/brave/brave";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";

@Injectable({
  providedIn: "root",
})
export class SyncService implements OnDestroy {
  data$: BehaviorSubject<AppDataStateModel> = new BehaviorSubject(
    {} as AppDataStateModel
  );
  fetching$ = new BehaviorSubject<boolean>(false);
  apiUpdateListener$: ZenObservable.Subscription | undefined;
  // apiCreateListener$: ZenObservable.Subscription;
  // apiDeleteListener$: ZenObservable.Subscription;

  constructor(
    private api: APIService,
    private store: Store,
    private router: Router,
    private statesvc: StateService
  ) {}

  ngOnDestroy(): void {
    if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
    // if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
    // if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  }

  /**
   * const isUserBrandNew = await this.isUserBrandNew(id);
   * if (isUserBrandNew === undefined) return;
   * if (isUserBrandNew && signInEvent) await this.initAppData(creds);
   * if (isUserBrandNew && !signInEvent) await this.initAppData(creds); // refreshed event
   * @param creds
   */
  async initUser(id: string): Promise<void> {
    const isNew = await this.isUserBrandNew(id);
    isNew ? await this.initAppData(id) : await this.syncDBDownToState(id);
  }

  /**
   * Handle returning users (implicit) !isUserBrandNew
   * 1. No ID from Amplify to validate against...bail out
   * 2. User has fully onboarded and a signin event...go to dashboard
   * 3. User has fully onboarded and NOT a signin event...stay put
   * 4. User has NOT fully onboarded and a signin event...go to last complete
   * 5. User has NOT fully onboarded and NOT a signin event...go to last complete
   * @param creds
   * @param signInEvent
   */
  async onboardUser(id: string, signInEvent: boolean): Promise<void> {
    const isOnboarded = await this.isUserOnboarded(id);
    if (isOnboarded) {
      signInEvent ? await this.goToDashboard(id) : await this.stayPut(id);
    } else {
      await this.goToLastOnboarded(id);
    }
  }

  /**
   * Subscribe to the AWS appsync listeners which sync down db data to client
   * @param id
   */
  async subscribeToListeners(id: string): Promise<void> {
    const { owner } = await queries.GetOwner(id);
    if (owner) {
      this.apiUpdateListener$ = this.api
        .OnUpdateAppDataListener(owner)
        .subscribe((data: any) => {
          if (data.value.errors) throw `API OnUpdateAppDataListener error`;
          const appData = data.value.data["onUpdateAppData"];
          if (!appData) return;
          const clean = this.cleanBackendData(appData);
          this.store.dispatch(new AppDataActions.Edit(clean));
        });
    }
  }

  /**
   * Takes the user ID and queries the database for any records
   * - returns whether the user is brand new or not (no data)
   * @param {string} id
   * @returns {Promise<boolean | undefined>}
   */
  async isUserBrandNew(id: string): Promise<boolean | undefined> {
    if (!id) return;
    try {
      const data = await this.api.GetAppData(id);
      if (!data) return true;
      const clean = this.cleanBackendData(data);
      this.data$.next(clean);
      return !data.id;
    } catch (err) {
      return true;
    }
  }

  /**
   * Takes the user ID and queries the databse for any records
   * - returns whether the user has completed the onboarding steps
   * @param {string} id
   * @returns
   */
  async isUserOnboarded(id: string): Promise<boolean | undefined> {
    if (!id) return;
    try {
      const data = await this.api.GetAppData(id);
      if (!data) return false;
      const clean = this.cleanBackendData(data);
      this.data$.next(clean);
      return data.user?.onboarding?.lastComplete === 3;
    } catch (err) {
      console.log("isUserOnboarded ==> ", err);
      return false;
    }
  }

  /**
   * Takes the user ID and syncs the state to the DB.
   * - Navigates to the dashboard init screen
   * @param {string} id
   */
  async goToDashboard(id: string): Promise<void> {
    // const data = await this.syncDBDownToState(id); // handled in resolver now
    this.router.navigate([routes.root.children.dashboard.children.init.full]);
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
   * - refreshes the report if needed
   * @param {string} id
   */
  async stayPut(id: string): Promise<void> {
    await this.syncDBDownToState(id);
  }

  /**
   * Seed the database with the basic credentials when the user signs up
   * @param {ICredentials} creds
   */
  async initAppData(id: string): Promise<AppDataStateModel | undefined> {
    if (!id) return;
    try {
      const input:
        | CreateAppDataInput
        | undefined = BraveUtil.generators.createNewUserData(id);
      if (input === undefined) return;
      const data = await this.api.CreateAppData(input);
      const clean = this.cleanBackendData(data);

      return await new Promise((resolve, reject) => {
        this.store
          .dispatch(new AppDataActions.Add(clean))
          .subscribe((appData) => {
            this.data$.next(clean);
            return resolve(clean);
          });
      });
    } catch (err) {
      throw new Error(`syncService:InitAppData=${JSON.stringify(err)}`);
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
        this.router.navigate([
          routes.root.children.onboarding.children.name.full,
        ]);
        break;
      case 0:
        this.router.navigate([
          routes.root.children.onboarding.children.address.full,
        ]);

        break;
      case 1:
        this.router.navigate([
          routes.root.children.onboarding.children.identity.full,
        ]);

        break;
      case 2:
        this.router.navigate([
          routes.root.children.onboarding.children.verify.full,
        ]);

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
    let userId: string;
    if (id === "") {
      const creds: CognitoUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const attrs = await Auth.userAttributes(creds);
      userId = attrs.filter((a) => a.Name === "sub")[0]?.Value;
    } else {
      userId = id;
    }
    if (payload) {
      this.store.dispatch(new AppDataActions.Edit(payload));
      return payload;
    }
    // no payload need to get the id
    try {
      const raw = await this.api.GetAppData(userId);
      const clean = this.cleanBackendData(raw);
      return new Promise((resolve, reject) => {
        this.store.dispatch(new AppDataActions.Edit(clean)).subscribe((_) => {
          this.data$.next(clean);
          resolve(clean);
        });
      });
    } catch (err) {
      throw "Error syncing db to state";
    }
  }

  /**
   * Removes the '__typename' fields from query results
   * @param {GetAppDataQuery} data
   * @returns
   */
  cleanBackendData(
    data: GetAppDataQuery | OnUpdateAppDataSubscription
  ): AppDataStateModel {
    let clean = BraveUtil.scrubbers.scrubBackendData(data);
    return clean;
  }
}
