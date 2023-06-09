import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { OnboardingStateModel } from "@store/onboarding";
import { OnboardingSelectors } from "@store/onboarding/onboarding.selectors";
import { CognitoUser } from "amazon-cognito-identity-js";
import { SyncService } from "@shared/services/sync/sync.service";
import { Auth } from "@aws-amplify/auth";
import { AppDataStateModel } from "@store/app-data/app-data.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AgenciesSelectors, AgenciesStateModel } from "@store/agencies";
import { AppStatus } from "@shared/utils/brave/constants";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";

@Injectable({
  providedIn: "root",
})
export class InitService {
  private data: AppDataStateModel | undefined;
  onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  private onboarding$: Observable<OnboardingStateModel> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  onboardingSub$: Subscription;

  private agencies: AgenciesStateModel = {} as AgenciesStateModel;
  private agencies$: Observable<AgenciesStateModel> = this.store.select(
    AgenciesSelectors.getAgencies
  );
  agenciesSub$: Subscription;

  constructor(
    private store: Store,
    private sync: SyncService,
    private router: Router
  ) {
    this.onboardingSub$ = this.onboarding$
      .pipe(
        filter((onboarding: OnboardingStateModel) => onboarding !== undefined)
      )
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });

    this.agenciesSub$ = this.agencies$
      .pipe(filter((agencies: AgenciesStateModel) => agencies !== undefined))
      .subscribe((agencies: AgenciesStateModel) => {
        this.agencies = agencies;
      });
  }

  ngOnDestroy(): void {
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
  }

  async resolver(): Promise<boolean> {
    const id = await this.getUserId();
    if (!id) {
      this.router.navigate([routes.root.auth.thankyou.full]); // need a please confirm account view
      return false;
    } else {
      try {
        let status: boolean = false;
        const isUserNew = await this.isUserNew(id);
        const isOnboarded = await this.isUserOnboarded(id);
        // initiate a new user else sync db to state
        status = await this.handleUser(isUserNew, id);
        // subscribe to listeners
        status = await this.handleListeners(id);
        // if suspended, go to suspended page
        const isSuspended: AppStatus = this.data?.status as AppStatus;

        const isAtWaitlist = this.router.url.indexOf("waitlist") >= 0;
        // go to onboarding if not onboarded, otherwise return true
        status = await this.handleRouting(
          isOnboarded || false,
          isAtWaitlist ? "waitlist" : isSuspended
        );
        return status;
      } catch (err) {
        console.log("error in resolver ===> ", err);
        this.router.navigate([routes.root.auth.signin.full]); // need a please confirm account view
        return false;
      }
    }
  }

  async handleUser(isUserNew: boolean = true, id: string): Promise<boolean> {
    try {
      if (isUserNew) {
        this.data = await this.initUser(id);
      } else {
        this.data = await this.syncDbToState(id);
      }
      return true;
    } catch (err) {
      console.log("handleUser:error ===> ", err);
      return false;
    }
  }

  async handleListeners(id: string): Promise<boolean> {
    try {
      await this.subscribeToListeners(id);
      return true;
    } catch (err) {
      console.log("subscribeToListeners:error ==> ", err);
      return false;
    }
  }

  async handleRouting(
    isOnboarded: boolean,
    status: AppStatus | "waitlist"
  ): Promise<boolean> {
    if (status === "waitlist") return false;
    if (status === AppStatus.Suspended) {
      this.router.navigate([routes.root.suspended.default.full]);
      return false;
    }
    try {
      if (!isOnboarded) {
        await this.goToLastOnboarded();
        return false;
      } else {
        this.router.navigate([routes.root.dashboard.init.full]);
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  /**
   * Returns the user id from the authenticated user
   */
  async getUserId(): Promise<string | undefined> {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    const attrs = await Auth.userAttributes(user);
    const id = attrs?.filter((a) => a.Name === "sub")[0]?.Value;
    return id;
  }

  /**
   * Returns whether the user is brand new or not (no data)
   * @param id
   */
  async isUserNew(id: string): Promise<boolean | undefined> {
    return await this.sync.isUserBrandNew(id);
  }

  /**
   * Creates a user record in the database
   * @param id
   */
  async initUser(id: string): Promise<AppDataStateModel | undefined> {
    return await this.sync.initAppData(id);
  }

  /**
   * Returns whether the user has completed the onboarding steps
   * @param id
   */
  async isUserOnboarded(id: string): Promise<boolean | undefined> {
    return await this.sync.isUserOnboarded(id);
  }

  /**
   * Subscribe to AppSync socket listeners
   * @param id
   */
  async subscribeToListeners(id: string): Promise<void> {
    return await this.sync.subscribeToListeners(id);
  }

  /**
   * Sync the database records to state
   * @param id
   */
  async syncDbToState(id: string): Promise<any> {
    return await this.sync.syncDBDownToState(id);
  }

  /**
   * Route the user to the last onboarded view
   */
  goToLastOnboarded(): void {
    const { lastComplete } = this.onboarding;
    const { transunion } = this.agencies;

    switch (lastComplete) {
      case -1:
        // this.router.navigate([routes.root.onboarding.name.full]);
        this.router.navigate([routes.root.onboarding.goalChoice.full]);
        break;
      case 0:
        this.router.navigate([routes.root.onboarding.address.full]);
        break;
      case 1:
        this.router.navigate([routes.root.onboarding.identity.full]);
        break;
      case 2:
        // if last on otp or kba go to either one.
        transunion?.kbaCurrentAge
          ? this.router.navigate([routes.root.onboarding.kba.full])
          : transunion?.pinCurrentAge
          ? this.router.navigate([routes.root.onboarding.code.full])
          : this.router.navigate([routes.root.onboarding.verify.full]);
        break;
      default:
        // nothing to do, stay on page
        break;
    }
  }
}
