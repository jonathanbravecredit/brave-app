import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { TUStatusRefInput, UserAttributesInput } from '@shared/services/aws/api.service';
import { KycSsnPureComponent } from '@views/onboarding/kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { IIndicativeEnrichmentResult, ITUServiceResponse } from '@shared/interfaces';
import { TUBundles } from '@shared/utils/transunion/constants';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycSsnPureComponent) pure: KycSsnPureComponent | undefined;
  stepID = 2;
  ssnError = false;
  ssnMap: Record<string, any> = {
    lastfour: true,
  };
  constructor(private router: Router, private kycService: KycService, private analytics: AnalyticsService) {
    super();
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingIdentity);
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
    this.router.navigate([routes.root.onboarding.address.full]);
  }

  /**
   * Method to take the form inputs and get the indicative enrichment response
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingIdentity);
    if (form.valid) {
      const { lastfour } = this.formatAttributes(form, this.ssnMap);
      const attrs = { ssn: { lastfour: lastfour } } as UserAttributesInput;
      this.ssnError = false;

      try {
        const data = await this.kycService.updateUserAttributesAsync(attrs);
        const resp = await this.kycService.getIndicativeEnrichmentResults(data);
        if (!resp.success || !resp.data) {
          this.handleBailout<IIndicativeEnrichmentResult>(resp);
        } else {
          const enrichment = await this.kycService.processIndicativeEnrichmentResponse(resp.data);
          const ssn = `${enrichment?.SSN}`;
          const full = ssn ? ssn : undefined;
          if (!full) {
            this.handleBailout<IIndicativeEnrichmentResult>(resp);
          } else {
            const newAttrs = {
              ssn: { ...attrs.ssn, full },
            } as UserAttributesInput;
            await this.kycService.updateUserAttributesAsync(newAttrs);
            this.kycService.completeStep(this.stepID);
            this.router.navigate([routes.root.onboarding.verify.full]);
          }
        }
      } catch {
        this.handleBailout<IIndicativeEnrichmentResult>(); // generic api error
      }
    }
  }

  /**
   * Handle the form errors gracefully
   * @param { [key: string]: AbstractControl } errors
   */
  handleError(errors: { [key: string]: AbstractControl }): void {
    const lastFour = errors.lastfour.value.input;
    if (lastFour.length < 4) {
      this.ssnError = true;
    }
  }

  handleBailout<T>(resp?: ITUServiceResponse<T | undefined>) {
    const tuPartial: {
      indicativeEnrichmentSuccess: boolean;
      indicativeEnrichmentStatus: TUStatusRefInput;
    } = {
      indicativeEnrichmentSuccess: false,
      indicativeEnrichmentStatus: tu.generators.createOnboardingStatus(TUBundles.IndicativeEnrichment, false, resp),
    };
    this.kycService.updateIndicativeEnrichment(tuPartial);
    this.router.navigate([routes.root.onboarding.identityfull.full]);
  }
}
