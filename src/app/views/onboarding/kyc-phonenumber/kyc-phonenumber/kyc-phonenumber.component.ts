import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { TUStatusRefInput, UserAttributesInput } from '@shared/services/aws/api.service';
import { IVerifyAuthenticationQuestionsResult } from '@shared/interfaces/verify-authentication-response.interface';
import { ITransunionKBAQuestion, ITransunionKBAQuestions } from '@shared/interfaces/tu-kba-questions.interface';
import { Store } from '@ngxs/store';
import { KycPhonenumberPureComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { IGetAuthenticationQuestionsResult } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { TUBundles } from '@shared/utils/transunion/constants';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents, AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycPhonenumberPureComponent) pure: KycPhonenumberPureComponent | undefined;
  private stepID = 3;
  public hasError: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private analytics: AnalyticsService,
    private kycService: KycService,
  ) {
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
    this.router.navigate(['../identity'], { relativeTo: this.route });
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
      const { phone } = this.formatAttributes(form, phoneMap);
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
    this.hasError = true;
  }
}

const phoneMap: Record<string, any> = {
  phone: true,
};
