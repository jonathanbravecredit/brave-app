import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { BraveUtil } from '@shared/utils/brave/brave';
import { AppStatus, AppStatusReason } from '@shared/utils/brave/constants';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycComponentCanDeactivate } from '@views/onboarding/kyc-deactivate-guard/kyc-deactivate.guard';
import { KycWelcomePureComponent } from '@views/onboarding/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-welcome',
  templateUrl: './kyc-welcome.component.html',
})
export class KycWelcomeComponent extends KycBaseComponent implements OnInit, AfterViewInit, KycComponentCanDeactivate {
  @ViewChild(KycWelcomePureComponent) pure: KycWelcomePureComponent | undefined;
  stepID = 0;
  hasError: boolean = false;
  constructor(private router: Router, private kycService: KycService, private analytics: AnalyticsService) {
    super();
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingName);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    const form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component)
    if (form) this.form = form;
  }

  async goToNext(form: FormGroup): Promise<void> {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingName);
    if (form.valid) {
      // write to state...TODO write to DB
      const attrs = {
        name: {
          ...this.formatAttributes(form, name),
        },
        dob: {
          ...this.formatAttributes(form, dob),
        },
      } as UserAttributesInput;
      await this.kycService.updateUserAttributesAsync(attrs);
      const year = +(attrs.dob?.year || 0);
      const month = +(attrs.dob?.month || 0) - 1;
      const day = +(attrs.dob?.day || 0);
      const dobDte = new Date(year, month, day);
      // just pass them through for now
      const isOldEnough = isNaN(dobDte.valueOf()) ? true : BraveUtil.queries.isUserValidAge(dobDte.toISOString());
      if (!isOldEnough) {
        // suspend the user account and route them to the suspended page
        const suspension = {
          status: AppStatus.Suspended,
          reason: AppStatusReason.AgeRestriction,
          duration: 24 * 30,
        };
        await this.kycService.suspendUser(suspension);
        this.router.navigate([routes.root.children.suspended.children.default.full]);
      } else {
        this.kycService.completeStep(this.stepID);
        this.router.navigate([routes.root.children.onboarding.children.address.full]);
      }
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.hasError = true;
  }
}

const name: Record<string, any> = {
  first: true,
  middle: true,
  last: true,
};

const dob: Record<string, any> = {
  year: true,
  month: true,
  day: true,
};
