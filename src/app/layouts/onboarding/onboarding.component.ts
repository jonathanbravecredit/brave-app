import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OnboardingService } from '@layouts/onboarding/onboarding.service';
import {
  FilledChecktextProgressbarComponent,
  IFilledChecktextProgressbarConfig,
} from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { Onboarding, OnboardingStep } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import * as OnboardingAction from '@store/onboarding';
import { Store } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'brave-onboarding',
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent implements OnInit, OnDestroy {
  @ViewChild(FilledChecktextProgressbarComponent)
  progressBar: FilledChecktextProgressbarComponent | undefined;
  progressConfig: IFilledChecktextProgressbarConfig = {
    size: 'base',
  };

  onboarding: Onboarding = {} as Onboarding;
  onboarding$: Observable<Onboarding> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  onboardingSub$: Subscription;

  constructor(private store: Store) {
    this.onboardingSub$ = this.onboarding$
      .pipe(filter((onboarding: Onboarding) => onboarding !== undefined))
      .subscribe((onboarding: Onboarding) => {
        this.onboarding = onboarding;
      });
  }

  ngOnInit(): void {
    const steps: OnboardingStep[] = [
      { id: 0, active: false, complete: false, name: 'Name' },
      { id: 1, active: false, complete: false, name: 'Address' },
      { id: 2, active: false, complete: false, name: 'Identity' },
      { id: 3, active: false, complete: false, name: 'Verify' },
    ];
    this.initiateOnboarding(steps);
  }

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {}

  /**
   * When the user first lands on welcome seed the onboarding data
   * @param {OnboardingStep} steps
   */
  initiateOnboarding(steps: OnboardingStep[]): void {
    if (!this.onboarding.started) {
      const onboarding: Onboarding = {
        started: true,
        steps: steps,
      };
      this.store.dispatch(new OnboardingAction.Edit(onboarding));
    }
  }
}
