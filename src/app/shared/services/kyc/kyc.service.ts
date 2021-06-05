import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { OnboardingStateModel } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import * as OnboardingAction from '@store/onboarding';
import * as UserAction from '@store/user';
import { UserStateModel, UserSelectors } from '@store/user';
import { UserAttributesInput } from '@shared/services/aws/api.service';

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

  constructor(private store: Store) {
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
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
    if (this.userSub$) this.userSub$.unsubscribe();
  }

  /**
   * Takes a progress step ID and sets the status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  activateStep(step: number): void {
    const { lastComplete } = this.onboarding;
    const onboarding: OnboardingStateModel | undefined = this.updateStep(
      step,
      lastComplete
    );
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes a progress step ID and sets the status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  inactivateStep(step: number): void {
    const { lastComplete } = this.onboarding;
    const onboarding: OnboardingStateModel | undefined = this.updateStep(
      step,
      lastComplete
    );
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  completeStep(step: number): void {
    const { lastActive } = this.onboarding;
    const onboarding: OnboardingStateModel | undefined = this.updateStep(
      lastActive,
      step
    );
    if (onboarding) {
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }

  /**
   * Takes a progress step ID and sets the complete status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  incompleteStep(step: number): void {
    const { lastActive } = this.onboarding;
    const onboarding: OnboardingStateModel | undefined = this.updateStep(
      lastActive,
      step
    );
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
    lastActive: number,
    lastComplete: number,
    started: boolean = true
  ): OnboardingStateModel | undefined {
    return { ...this.onboarding, lastActive, lastComplete, started };
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
