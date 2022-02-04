import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { FlatForm, KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycSsnFullPureComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-ssn-full',
  templateUrl: './kyc-ssn-full.component.html',
})
export class KycSsnFullComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycSsnFullPureComponent) pure: KycSsnFullPureComponent | undefined;
  stepID = 2;
  ssnError = false;
  ssn: Record<string, any> = {
    full: true,
  };
  constructor(private router: Router, private kycService: KycService, private analytics: AnalyticsService) {
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
    this.router.navigate([routes.root.onboarding.address.full]);
  }

  async goToNext(form: FormGroup): Promise<void> {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingIdentityFull);
    if (form.valid) {
      this.ssnError = false;
      const { full } = this.formatAttributes(form, this.ssn);
      if (full.length < 9) {
        this.handleError({});
      } else {
        const attrs = {
          ssn: {
            lastfour: full.slice(-4),
            full: full,
          },
        } as UserAttributesInput;
        await this.kycService.updateUserAttributesAsync(attrs)
        this.kycService.completeStep(this.stepID);
        this.router.navigate([routes.root.onboarding.verify.full]);
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
    const fullSsn = errors.full?.value?.input;
    if (!fullSsn || fullSsn.length < 9) {
      this.ssnError = true;
    }

    if (this.pure) {
      this.pure.hasError = true;
      this.pure.showError = true;
    }
  }
}
