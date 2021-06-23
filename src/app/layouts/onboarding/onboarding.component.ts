import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FilledChecktextProgressbarComponent,
  IFilledChecktextProgressbarConfig,
} from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { OnboardingStateModel, OnboardingStep } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import { Store } from '@ngxs/store';
import { filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-onboarding',
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent {
  @ViewChild(FilledChecktextProgressbarComponent)
  progressBar: FilledChecktextProgressbarComponent | undefined;
  progressConfig: IFilledChecktextProgressbarConfig = {
    size: 'base',
  };

  onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  onboarding$: Observable<OnboardingStateModel> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  onboardingSub$: Subscription;
  steps: OnboardingStep[] = [
    { id: 0, active: false, complete: false, name: 'Name' },
    { id: 1, active: false, complete: false, name: 'Address' },
    { id: 2, active: false, complete: false, name: 'Identity' },
    { id: 3, active: false, complete: false, name: 'Verify' },
  ];

  constructor(private auth: AuthService, private store: Store) {
    this.onboardingSub$ = this.onboarding$
      .pipe(
        filter((onboarding: OnboardingStateModel) => onboarding !== undefined)
      )
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });
  }
}
