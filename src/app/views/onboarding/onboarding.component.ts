import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
import { OnboardingService } from '@views/onboarding/onboarding.service';

// const terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';

@Component({
  selector: 'brave-onboarding',
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent implements OnDestroy, AfterViewInit {
  @ViewChild(FilledChecktextProgressbarComponent)
  progressBar: FilledChecktextProgressbarComponent | undefined;
  progressConfig: IFilledChecktextProgressbarConfig = {
    size: 'base',
  };

  onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  onboarding$: Observable<OnboardingStateModel> = this.store.select(OnboardingSelectors.getOnboarding);
  onboardingSub$: Subscription;
  steps: OnboardingStep[] = [
    { id: 0, active: false, complete: false, name: 'Name' },
    { id: 1, active: false, complete: false, name: 'Address' },
    { id: 2, active: false, complete: false, name: 'Identity' },
    { id: 3, active: false, complete: false, name: 'Verify' },
  ];
  listener: any;

  constructor(private store: Store, private renderer: Renderer2, private onboardingService: OnboardingService) {
    this.onboardingSub$ = this.onboarding$
      .pipe(filter((onboarding: OnboardingStateModel) => onboarding !== undefined))
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });
  }

  ngAfterViewInit(): void {
    this.listener = this.renderer.listen(window, 'beforeunload', (event: BeforeUnloadEvent) => {
      if (!this.onboarding.abandoned) {
        this.onboardingService.abandonOnboarding();
      }
      event.returnValue = false;
    });
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener(); // listener returns a function to invoke which 'unlistens'
      this.listener = null;
    }
  }
}
