import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { TUReportResponse, UpdateAppDataInput, UserAttributesInput } from '@shared/services/aws/api.service';
import { IVerifyAuthenticationQuestionsResult } from '@shared/interfaces/verify-authentication-response.interface';
import { ITransunionKBAQuestion, ITransunionKBAQuestions } from '@shared/interfaces/tu-kba-questions.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { AppDataStateModel } from '@store/app-data';
import { Store } from '@ngxs/store';
import { KycPhonenumberPureComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import {
  GooglePageViewEvents as gtViews,
  GoogleClickEvents as gtClicks,
} from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { ITUServiceResponse } from '@shared/interfaces/common-tu.interface';
import { IGetAuthenticationQuestionsResult } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent extends KycBaseComponent implements OnInit, AfterViewInit {
  @ViewChild(KycPhonenumberPureComponent) pure: KycPhonenumberPureComponent | undefined;
  private stepID = 3;
  private state: UpdateAppDataInput | undefined;
  private authXML: string | undefined;
  private authQuestions: ITransunionKBAQuestions | undefined;
  private otpQuestion: ITransunionKBAQuestion | undefined;
  private otpAnswer: IVerifyAuthenticationAnswer | undefined;
  private verifyResponse: IVerifyAuthenticationQuestionsResult | undefined;
  private codeQuestion: string | undefined;
  private authResponse: IVerifyAuthenticationQuestionsResult | undefined;
  private authSuccessful: boolean = false;
  public hasError: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private google: GoogleService,
    private kycService: KycService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtViews.OnboardingPhone);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../identity'], { relativeTo: this.route });
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.hasError = true;
  }

  /**
   * Method to:
   * - Update the phone number
   * - Get the authentication questions
   * - Parse the questions xml data
   * - Resave it in the db as object
   * - find the OTP question (if not go to KBA)
   * - Choose send to send to cell phone (over landline)
   * - Confirm response, save to state, and go to code input
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    this.google.fireClickEvent(gtClicks.OnboardingPhone);
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
        debugger;
        if (!authResp.success || !authResp.data) {
          this.bailOut<IGetAuthenticationQuestionsResult>(authResp); // TU response or BC technical error
        } else {
          const questions = await this.kycService.processGetAuthenticationQuestionsResponse(authResp.data);
          const xml = tu.parsers.onboarding.parseAuthQuestions(questions);
          debugger;
          if (!xml) {
            this.bailOut();
          } else {
            await this.kycService.updateCurrentRawQuestionsAsync(xml); // will through error if connection issue
            const authQuestions = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAQuestions>(xml);
            const otpQuestion = this.kycService.getOTPQuestion(authQuestions);
            debugger;
            if (otpQuestion) {
              const otpResp = await this.sendOTPResponse(otpQuestion);
              debugger;
              if (!otpResp.success || !otpResp.data) {
                this.bailOut<IVerifyAuthenticationQuestionsResult>(otpResp);
              } else {
                const codeQuestions = otpResp.data?.AuthenticationDetails;
                await this.kycService.updateCurrentRawQuestionsAsync(codeQuestions);
                debugger;
                this.router.navigate(['../code'], { relativeTo: this.route });
              }
            } else {
              this.router.navigate(['../kba'], { relativeTo: this.route });
            }
          }
        }
      } catch (err) {
        debugger;
        this.bailOut();
      }
    }
  }

  bailOut<T>(resp?: ITUServiceResponse<T | undefined>) {
    //handle the errors correctly
    // if resp is undefined = BC technical error...go to retry.
    // otherwise validate the error responses against the flow (-1) is BC technical...go to retry
  }

  /**
   * Method to:
   * - Find the correct OTP answer in the response from TU
   * - Select the answer for the user to receive a text message
   * - Confirm answer is received
   */
  async sendOTPResponse(
    otpQuestion: ITransunionKBAQuestion,
  ): Promise<ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>> {
    const state = this.store.snapshot()['appData']; // refresh state for new bundle key
    const otpAnswer = this.kycService.getOTPSendTextAnswer(otpQuestion); //this.getOTPAnswer(otpQuestion); // automatically select (send text for user)
    try {
      const resp = await this.kycService.sendVerifyAuthenticationQuestions(state, [otpAnswer]);
      if (!resp.success || !resp.data) {
        return resp;
      } else {
        const parsed = resp.data ? resp.data : ({} as IVerifyAuthenticationQuestionsResult);
        const success = parsed ? parsed.ResponseType.toLowerCase() === 'success' : false;
        return { success, data: parsed };
      }
    } catch (err: any) {
      return { success: false };
    }
  }
}

const phoneMap: Record<string, any> = {
  phone: true,
};
