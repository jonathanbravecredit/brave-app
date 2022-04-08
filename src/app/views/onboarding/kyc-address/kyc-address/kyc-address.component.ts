import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycAddressPureComponent } from '@views/onboarding/kyc-address/kyc-address-pure/kyc-address-pure.component';
import { KycComponentCanDeactivate } from '@views/onboarding/kyc-deactivate-guard/kyc-deactivate.guard';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent extends KycBaseComponent implements OnInit, AfterViewInit, KycComponentCanDeactivate {
  @ViewChild(KycAddressPureComponent) pure: KycAddressPureComponent | undefined;
  stepID = 1;
  hasError: boolean = false;
  listener: any;
  address: Record<string, any> = {
    addressOne: true,
    addressTwo: true,
    city: true,
    state: true,
    zip: true,
  };

  constructor(private router: Router, private kycService: KycService, private analytics: AnalyticsService) {
    super();
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingAddress);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate([routes.root.onboarding.name.full]);
  }

  async goToNext(form: FormGroup): Promise<void> {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingAddress);
    // const clean = TransunionUtil.scrubbers.{ ...this.formatAttributes(form, address) };
    if (form.valid) {
      let attrs = {
        address: {
          ...this.formatAttributes(form, this.address),
        },
      } as UserAttributesInput;
      attrs.address = {
        addressOne: tu.scrubbers.scrubAddressStreets(attrs.address?.addressOne || ''),
        addressTwo: tu.scrubbers.scrubAddressStreets(attrs.address?.addressTwo || ''),
        city: tu.scrubbers.scrubAddressStreets(attrs.address?.city || ''),
        state: attrs.address?.state || '',
        zip: attrs.address?.zip || '',
      };

      await this.kycService.updateUserAttributesAsync(attrs)

      this.kycService.completeStep(this.stepID);
      this.router.navigate([routes.root.onboarding.identity.full]);
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.hasError = true;
  }
}
