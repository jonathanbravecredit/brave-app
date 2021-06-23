import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { OnboardingStateModel } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';

@Injectable()
export class OnboardingService implements OnDestroy {
  private onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  private onboarding$: Observable<OnboardingStateModel> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  private onboardingSub$: Subscription;

  constructor(private store: Store) {
    this.onboardingSub$ = this.onboarding$
      .pipe(
        filter((onboarding: OnboardingStateModel) => onboarding !== undefined)
      )
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });
  }

  ngOnDestroy(): void {
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
  }
}
