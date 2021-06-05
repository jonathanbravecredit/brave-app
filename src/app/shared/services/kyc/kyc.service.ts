import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { OnboardingStateModel, OnboardingStep } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import * as OnboardingAction from '@store/onboarding';
import * as UserAction from '@store/user';
import { UserStateModel, UserSelectors } from '@store/user';
import {
  APIService,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { AppDataStateModel } from '@store/app-data';

@Injectable({
  providedIn: 'root',
})
export class KycService implements OnDestroy {
  public onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  public onboarding$: Observable<OnboardingStateModel> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  public onboardingSub$: Subscription;

  user: UserStateModel = new UserStateModel();
  user$: Observable<UserStateModel> = this.store.select(UserSelectors.getUser);
  userSub$: Subscription;

  state$: Subject<AppDataStateModel> = new Subject();
  stateSub$: Subscription;

  constructor(private store: Store, private api: APIService) {
    this.stateSub$ = this.store.subscribe((state) => {
      console.log('state has changed ===>', state);
      this.state$.next(state);
      const input = { ...state.appData } as UpdateAppDataInput;
      console.log('input ===> ', input);
      this.api
        .UpdateAppData(input)
        .then((res) => {
          console.log('graphql res ===> ', res);
        })
        .catch((err) => {
          console.log('graphql err ===> ', err);
        });
    });
    this.onboardingSub$ = this.onboarding$
      .pipe(
        filter((onboarding: OnboardingStateModel) => onboarding !== undefined)
      )
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });

    this.userSub$ = this.user$
      .pipe(filter((user: UserStateModel) => user !== undefined))
      .subscribe((user: UserStateModel) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    if (this.stateSub$) this.stateSub$.unsubscribe();
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
    if (this.userSub$) this.userSub$.unsubscribe();
  }

  /**
   * Takes a progress step ID and sets the status to true
   * Then updates the state
   * @param {number} id the progress step ID
   */
  activateStep(id: number): void {
    const onboarding: OnboardingStateModel | undefined = this.updateStep(id, {
      active: true,
    });
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes a progress step ID and sets the status to false
   * Then updates the state
   * @param {number} id the progress step ID
   */
  inactivateStep(id: number): void {
    const onboarding: OnboardingStateModel | undefined = this.updateStep(id, {
      active: false,
    });
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} id the progress step ID
   */
  completeStep(id: number): void {
    const onboarding: OnboardingStateModel | undefined = this.updateStep(id, {
      complete: true,
    });
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes a progress step ID and sets the complete status to false
   * Then updates the state
   * @param {number} id the progress step ID
   */
  incompleteStep(id: number): void {
    const onboarding: OnboardingStateModel | undefined = this.updateStep(id, {
      complete: false,
    });
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes the id of the step and updates the state of the step to either active or complete
   * @param {number} id the progress step ID
   * @param {{ active: boolean } | { complete: boolean }}  state the state of the step to update (active or complete)
   * @returns
   */
  updateStep(
    id: number,
    state: { active: boolean } | { complete: boolean }
  ): OnboardingStateModel | undefined {
    let onboarding = this.onboarding;
    let welcome: OnboardingStep | undefined = onboarding?.steps?.find(
      (step: OnboardingStep) => {
        return step.id === id;
      }
    );
    if (welcome !== undefined) {
      welcome = { ...welcome, ...state };
      const steps: OnboardingStep[] = onboarding?.steps?.map(
        (step: OnboardingStep) => {
          return step.id === welcome?.id ? welcome : step;
        }
      );
      return { ...onboarding, steps };
    } else {
      return;
    }
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  updateUserAttributes(attrs: UserAttributesInput): void {
    const user: UserStateModel = {
      ...this.user,
      userAttributes: { ...this.user.userAttributes, ...attrs },
    };
    this.store.dispatch(new UserAction.Edit(user));
  }
}
