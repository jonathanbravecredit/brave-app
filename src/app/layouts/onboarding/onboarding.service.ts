import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import * as OnboardingAction from '@store/onboarding';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Onboarding, OnboardingStep } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService implements OnDestroy {
  private onboarding: Onboarding = {} as Onboarding;
  private onboarding$: Observable<Onboarding> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  private onboardingSub$: Subscription;

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
}
