import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycPhonenumberPureComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycPhonenumberPureComponent) pure: KycPhonenumberPureComponent | undefined;
  private stepID = 3;
  public hasError: boolean = false;
  phoneError = false;
  phoneMap: Record<string, any> = {
    phone: true,
  };

  constructor(private router: Router, private analytics: AnalyticsService, private kycService: KycService) {
    super();
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.OnboardingPhone);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate([routes.root.onboarding.identity.full]);
  }

  /**
   * Method to:
   * - Update the phone number
   * - Get the authentication questions
   * IN THE SERVICE
   * - Parse the questions xml data
   * - Resave it in the db as object
   * - find the OTP question (if not go to KBA)
   * - Choose send to send to cell phone (over landline)
   * - Confirm response, save to state, and go to code input
   * BE CAREFUL OF RACE CONDITIONS HERE!!!
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    this.analytics.fireClickEvent(AnalyticClickEvents.OnboardingPhone);
    if (form.valid) {
      this.phoneError = false;
      const { phone } = this.formatAttributes(form, this.phoneMap);
      const attrs = {
        phone: {
          primary: phone,
        },
      } as UserAttributesInput;

      try {
        const data = await this.kycService.updateUserAttributesAsync(attrs);
        const authResp = await this.kycService.getGetAuthenticationQuestionsResults(data);
        await this.kycService.handleGetAuthenticationFlow(authResp);
      } catch (err) {
        console.log('error ==> ', err);
        this.kycService.handleGetAuthenticationBailout();
      }
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    const phoneNum = errors.phone.value.input;
    if (phoneNum.length < 10) {
      this.phoneError = true;
    }

    this.hasError = true;
  }
}
