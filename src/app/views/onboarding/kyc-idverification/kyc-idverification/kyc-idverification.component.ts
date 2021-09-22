import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { TransunionInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { returnNestedObject } from '@shared/utils/utils';
import {
  ITransunionKBAChallengeAnswer,
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { AppDataStateModel } from '@store/app-data';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import {
  GooglePageViewEvents as gtViews,
  GoogleClickEvents as gtClicks,
} from '@shared/services/analytics/google/constants';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ITUServiceResponse } from '@shared/interfaces';
import { TUBundles } from '@shared/utils/transunion/constants';
import { AppStatus, AppStatusReason } from '@shared/utils/brave/constants';

export type KycIdverificationState = 'init' | 'sent' | 'error' | 'minimum';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent extends KycBaseComponent implements OnInit {
  @Input() viewState: KycIdverificationState = 'init';
  stepID = 3;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private kycService: KycService,
    private google: GoogleService,
    private interstitial: InterstitialService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtViews.OnboardingCode);
    this.kycService.activateStep(this.stepID);
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.interstitial.fetching$.next(false);
    this.updateViewState('minimum');
  }

  updateViewState(viewState: KycIdverificationState) {
    this.viewState = viewState;
  }

  /**
   * Method to:
   * - sends the 'NEWPIN' answer (using the same process as the code) to resend a new code
   */
  async resendCode(): Promise<void> {
    const code = 'NEWPIN';
    const { appData } = this.store.snapshot();
    const pinRequests = appData?.agencies?.transunion?.pinRequests || 0;
    if (!(pinRequests >= 0)) {
      this.interstitial.fetching$.next(false);
      this.bailOut(); //bail out on technical error...no prior pin requests
    } else if (pinRequests >= 3) {
      const suspension = {
        status: AppStatus.Suspended,
        reason: AppStatusReason.PinRequestsExceeded,
        duration: 24 * 30,
      };
      this.kycService.suspendUser(suspension);
      this.interstitial.fetching$.next(false);
    } else {
      try {
        await this.processRequest(code, appData);
        await this.kycService.incrementPinRequest(); // increment up the pin count
        this.interstitial.fetching$.next(false);
        this.updateViewState('sent');
      } catch (err) {
        console.log('error:resendCode ===> ', err);
        this.interstitial.fetching$.next(false);
        this.bailOut(); // bail out on technical error...non specific api
      }
    }
  }

  /**
   * Method to:
   * - takes the code passed from the form
   * - grabs the state, the pin age, and pin attempts
   * - if pin age or pin attempt null, then no pin through technical error
   * - else if pin is stale (> 15 mins), suspend them for pin age exceeded
   * - else if pin attempts >= 3, suspend them for pin attempts exceeded
   * - else increase the pin attempts by 1 and process the pin code
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    this.google.fireClickEvent(gtClicks.OnboardingCode);
    if (form.valid) {
      const { code } = this.formatAttributes(form, codeMap);
      const { appData } = this.store.snapshot();
      const pinAge = appData?.agencies?.transunion?.pinCurrentAge;
      const pinAttempts = appData?.agencies?.transunion?.pinAttempts || 0;

      if (!pinAge || !(pinAttempts >= 0)) {
        this.interstitial.fetching$.next(false);
        this.bailOut(); //bail out on technical error...no pin
      } else if (tu.queries.exceptions.isPinStale(pinAge)) {
        this.handleSuspension(AppStatusReason.PinAgeExceeded);
      } else if (pinAttempts >= 3) {
        this.handleSuspension(AppStatusReason.PinAttemptsExceeded);
      } else {
        try {
          await this.kycService.incrementPinAttempts();
          await this.processRequest(code, appData);
          this.interstitial.fetching$.next(false);
        } catch (err) {
          console.log('error:goToNext ===> ', err);
          this.bailOut(); // bail out on technical error...non specific api
        }
      }
    }
  }

  /**
   * Method to:
   * - Get authentication questions from the state
   * - if no questions found, then technical parsing error
   * - else generate answer by injecting OTP code in to answer
   *   - send answer to TU
   *   - if response is unsuccessful or no data returned, bailout (with error)
   *   - else if successful and response in data is success, complete onboarding
   *   - else the code is increect and display message to user...DO NOT increment pin (already done)
   */
  async processRequest(code: string, appData: UpdateAppDataInput): Promise<void> {
    const passcodeQuestion = this.getAuthenticationQuestions(appData);
    if (!passcodeQuestion) {
      this.bailOut<any>(); // bail out on technical error...could not parse questions
    } else {
      try {
        const answer = this.kycService.getPassCodeAnswer(passcodeQuestion, code);
        const resp = await this.kycService.sendVerifyAuthenticationQuestions(appData, [answer]); //this.sendVerifyAuthQuestions(this.state, answer);
        if (!resp.success || !resp.data) {
          this.bailOut(resp); // need to handle this appropriately
        } else if (resp.data.ResponseType.toLowerCase() === 'success') {
          await this.sendCompleteOnboarding();
        } else {
          this.updateViewState('error'); // DO NOT increment up pin attempt...already handled above
        }
      } catch (err) {
        console.log('error:processRequest ===> ', err);
        this.bailOut(); // bail out on technical error...non specific api
      }
    }
  }

  /**
   * Method to:
   * - Get raw questions for passcode from state
   * - parse the question
   * - get the passcode question
   * // authQuestions > authChallenge > passcodeQuestion
   * @param attrs
   */
  getAuthenticationQuestions(
    state: UpdateAppDataInput | AppDataStateModel | undefined,
  ): ITransunionKBAQuestion | undefined {
    if (!state) return;
    const authXML = returnNestedObject(state, 'currentRawQuestions') || '';
    const authQuestion = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAChallengeAnswer>(authXML);
    const authChallenge = this.createChallengeConfig(authQuestion);
    return authChallenge ? this.kycService.getPassCodeQuestion(authChallenge) : undefined;
  }

  /**
   * Method to find and restructure ChallengeConfiguration
   * @param questions
   * @returns
   */
  createChallengeConfig(questions: ITransunionKBAChallengeAnswer | undefined): ITransunionKBAQuestions | undefined {
    if (!questions) return;
    const config = returnNestedObject(questions, 'ChallengeConfiguration');
    if (!config) return;
    return {
      ChallengeConfigurationType: {
        ...config,
      },
    };
  }

  /**
   * Once the user is verified complete the onboarding step on the server
   * - update the state to indicate the step is complete (IMPORTANT, needs to be called first)
   * - send request to TU to enroll user
   * - if successfull, route user to congratulations
   * - else suspend user for enrollment failure
   * @param state
   * @returns
   */
  async sendCompleteOnboarding(): Promise<void> {
    try {
      this.kycService.completeStep(this.stepID); // !IMPORTANT, needs to call before backend, otherwise state is stale
      const { success, error } = await this.kycService.sendEnrollRequest();
      success
        ? this.router.navigate(['../congratulations'], {
            relativeTo: this.route,
          }) // api successful and TU successful
        : this.handleSuspension(AppStatusReason.EnrollmentFailed);
    } catch (err) {
      console.log('error:completeOnboarding ===> ', err);
      this.interstitial.fetching$.next(false);
      this.bailOut(); // bail out on technical error...non specific api
    }
  }

  /**
   * Method to route user to appropriate error screen using kyc service
   * @param resp
   */
  bailOut<T>(resp?: ITUServiceResponse<T | undefined>) {
    const tuPartial: Partial<TransunionInput> = {
      verifyAuthenticationQuestionsOTPSuccess: false,
      verifyAuthenticationQuestionsOTPStatus: tu.generators.createOnboardingStatus(
        TUBundles.VerifyAuthenticationQuestionsOTP,
        false,
        resp,
      ),
    };
    this.kycService.bailoutFromOnboarding(tuPartial, resp);
  }

  /**
   * Helper to generate suspension requests
   * @param reason
   */
  handleSuspension(reason: AppStatusReason): void {
    const suspension = {
      status: AppStatus.Suspended,
      reason: reason,
      duration: 24 * 30,
    };
    this.kycService.suspendUser(suspension);
    this.interstitial.fetching$.next(false);
    this.router.navigate(['/suspended/default']);
  }
}

const codeMap: Record<string, any> = {
  code: true,
};
