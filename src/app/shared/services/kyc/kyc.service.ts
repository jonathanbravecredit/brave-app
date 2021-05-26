import { Injectable, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Onboarding, OnboardingStep } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import * as OnboardingAction from '@store/onboarding';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KycService implements OnDestroy {
  public onboarding: Onboarding = {} as Onboarding;
  public onboarding$: Observable<Onboarding> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  public onboardingSub$: Subscription;

  constructor(private store: Store) {
    this.onboardingSub$ = this.onboarding$
      .pipe(filter((onboarding: Onboarding) => onboarding !== undefined))
      .subscribe((onboarding: Onboarding) => {
        this.onboarding = onboarding;
      });
  }

  ngOnDestroy(): void {
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
  }

  /**
   * Takes a progress step ID and sets the status to true
   * Then updates the state
   * @param {number} id the progress step ID
   */
  activateStep(id: number): void {
    const onboarding: Onboarding | undefined = this.updateStep(id, {
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
    const onboarding: Onboarding | undefined = this.updateStep(id, {
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
    const onboarding: Onboarding | undefined = this.updateStep(id, {
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
    const onboarding: Onboarding | undefined = this.updateStep(id, {
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
  ): Onboarding | undefined {
    let onboarding = this.onboarding;
    let welcome: OnboardingStep | undefined = onboarding.steps.find(
      (step: OnboardingStep) => {
        return step.id === id;
      }
    );
    if (welcome !== undefined) {
      welcome = { ...welcome, ...state };
      const steps: OnboardingStep[] = onboarding.steps.map(
        (step: OnboardingStep) => {
          return step.id === welcome?.id ? welcome : step;
        }
      );
      return { ...onboarding, steps };
    } else {
      return;
    }
  }
}
