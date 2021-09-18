import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KYCResponse, KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycSsnPureComponent } from '@views/onboarding/kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import {
  GooglePageViewEvents as gtViews,
  GoogleClickEvents as gtClicks,
} from '@shared/services/analytics/google/constants';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycSsnPureComponent) pure: KycSsnPureComponent | undefined;
  stepID = 2;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private google: GoogleService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtViews.OnboardingIdentity);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  /**
   * Method to navigate back one step
   */
  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../address'], { relativeTo: this.route });
  }

  /**
   * Method to take the form inputs and get the indicative enrichment response
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    this.google.fireClickEvent(gtClicks.OnboardingIdentity);
    // ssn is a little different as each code is one input
    if (form.valid) {
      const { lastfour } = this.formatAttributes(form, ssnMap);
      const attrs = {
        ssn: {
          lastfour: lastfour,
        },
      } as UserAttributesInput;
      try {
        const data = await this.kycService.updateUserAttributesAsync(attrs);
        const full = await this.kycService.getIndicativeEnrichmentResults(data);
        if (full === KYCResponse.Failed) {
          this.router.navigate(['../identityfull'], { relativeTo: this.route });
        } else {
          const newAttrs = {
            ssn: { ...attrs.ssn, full },
          } as UserAttributesInput;
          this.kycService.updateUserAttributesAsync(newAttrs);
          this.kycService.completeStep(this.stepID);
          this.router.navigate(['../verify'], { relativeTo: this.route });
        }
      } catch {
        this.router.navigate(['../identityfull'], { relativeTo: this.route });
      }
    }
  }

  /**
   * Handle the form errors gracefully
   * @param { [key: string]: AbstractControl } errors
   */
  handleError(errors: { [key: string]: AbstractControl }): void {
    // console.log('form errors', errors);
  }
}

const ssnMap: Record<string, any> = {
  lastfour: true,
};
