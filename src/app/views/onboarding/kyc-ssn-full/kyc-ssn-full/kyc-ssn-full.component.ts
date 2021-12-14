import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { FlatForm, KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycSsnFullPureComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';

@Component({
  selector: 'brave-kyc-ssn-full',
  templateUrl: './kyc-ssn-full.component.html',
})
export class KycSsnFullComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycSsnFullPureComponent) pure: KycSsnFullPureComponent | undefined;
  stepID = 2;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private analytics: AnalyticsService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingIdentityFull);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../address'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingIdentityFull);
    if (form.valid) {
      const { full } = this.formatAttributes(form, ssn);
      if (full.length < 9) {
        this.handleError({});
      } else {
        const attrs = {
          ssn: {
            lastfour: full.slice(-4),
            full: full,
          },
        } as UserAttributesInput;
        this.kycService.updateUserAttributesAsync(attrs).then((appData) => {
          this.kycService.completeStep(this.stepID);
          this.router.navigate(['../verify'], { relativeTo: this.route });
        });
      }
    } else {
      this.handleError({});
    }
  }

  formatCode(values: FlatForm): string {
    let str = '';
    for (let i = 0; i < 9; i++) {
      str += values[`input-${i}`];
    }
    return str;
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.pure?.hasError === true;
    this.pure?.showError === true;
  }
}

const ssn: Record<string, any> = {
  full: true,
};
