import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { IVerifyAuthenticationQuestionsResult } from '@shared/interfaces/verify-authentication-response.interface';
import { TransunionInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { returnNestedObject } from '@shared/utils/utils';
import {
  ITransunionKBAChallengeAnswer,
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
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

export type KycIdverificationState = 'init' | 'sent' | 'error' | 'minimum';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent extends KycBaseComponent {
  @Input() viewState: KycIdverificationState = 'init';
  stepID = 3;
  private attempts = 0;
  private state: UpdateAppDataInput | undefined;
  private code: string | undefined;
  private authXML: string | undefined;
  private authQuestions: ITransunionKBAChallengeAnswer | undefined;
  private passcodeQuestion: ITransunionKBAQuestion | undefined;
  private passcodeAnswer: IVerifyAuthenticationAnswer | undefined;
  private authChallenge: ITransunionKBAQuestions | undefined;
  private verifyResponse: IVerifyAuthenticationQuestionsResult | undefined;
  private authResponse: IVerifyAuthenticationQuestionsResult | undefined;
  private authSuccessful: boolean = false;

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
    this.code = 'NEWPIN';
    const { appData } = this.store.snapshot();
    this.state = appData;

    try {
      await this.processRequest(this.code);
    } catch (err) {
      this.interstitial.fetching$.next(false);
      if (this.attempts > 2) {
        this.router.navigate(['../error'], {
          relativeTo: this.route,
          queryParams: {
            code: '11',
          },
        });
      }
    }
    this.updateViewState('sent');
  }

  /**
   * Method to:
   * - takes the code passed from the form to the process request method
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    this.google.fireClickEvent(gtClicks.OnboardingCode);
    if (form.valid) {
      const { code } = this.formatAttributes(form, codeMap);
      this.code = code;
      const { appData } = this.store.snapshot();
      this.state = appData;

      try {
        await this.processRequest(this.code);
      } catch (err) {
        this.interstitial.fetching$.next(false);
        if (this.attempts > 2) {
          this.router.navigate(['../error'], {
            relativeTo: this.route,
            queryParams: {
              code: '11',
            },
          });
        }
      }
    }
  }

  /**
   * Method to:
   * - Get authentication questions
   * - send the passcode response
   * - Enroll the user in report & score and disputes
   * - Update the enriched enrollment data to state
   */
  async processRequest(code: string): Promise<void> {
    try {
      this.getAuthenticationQuestions();
      this.passcodeQuestion ? await this.sendPasscodeResponse(code) : this.bailOut<any>();
      this.authSuccessful
        ? await this.sendCompleteOnboarding()
        : (() => {
            throw 'Authentication request failed';
          })();
    } catch (err) {
      this.interstitial.fetching$.next(false);
      if (this.attempts > 2) {
        this.router.navigate(['../error'], {
          relativeTo: this.route,
          queryParams: {
            code: '15',
          },
        });
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
  getAuthenticationQuestions(): void {
    this.getAuthDetails(this.state)
      .parseAuthDetails(this.authXML)
      .createChallengeConfig(this.authQuestions)
      .getPasscodeQuestion(this.authChallenge);
  }

  /**
   * Updates the authXML prop with the authentication questions back from TU
   * @param {UpdateAppDataInput | AppDataStateModel | undefined} state
   * @returns
   */
  getAuthDetails(state: UpdateAppDataInput | AppDataStateModel | undefined): KycIdverificationComponent {
    if (!state) return this;
    this.authXML = returnNestedObject(state, 'currentRawQuestions');
    return this;
  }

  /**
   * Update the authQuestions prop with the parsed authXML prop
   * @param xml
   * @returns
   */
  parseAuthDetails(xml: string | undefined): KycIdverificationComponent {
    if (!xml) return this;
    this.authQuestions = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAChallengeAnswer>(xml);
    return this;
  }

  createChallengeConfig(questions: ITransunionKBAChallengeAnswer | undefined): KycIdverificationComponent {
    if (!questions) throw 'kycIdverification:createChallengeConfig=Missing questions';
    const config = returnNestedObject(questions, 'ChallengeConfiguration');
    if (!config) throw 'kycIdverification:createChallengeConfig=ChallengeConfiguration not found';
    this.authChallenge = {
      ChallengeConfigurationType: {
        ...config,
      },
    };
    return this;
  }

  /**
   * Updates the otpQuestion prop with the OTP question provided by TU
   *   - Searches the questions returned for specific OTP text
   * @param questions
   * @returns
   */
  getPasscodeQuestion(questions: ITransunionKBAQuestions | undefined): KycIdverificationComponent {
    if (!questions) throw 'kycIdverification:getPasscodeQuestion=Missing questions';
    const question = this.kycService.getPassCodeQuestion(questions);
    if (!question) throw 'kycIdverification:getPasscodeQuestion=No passcode question returned';
    this.passcodeQuestion = question;
    return this;
  }

  /**
   * Method to:
   * - get the passcode answer
   * - verify the answer with TU
   * - confirm authentication
   * // passcodeAnswer > verifyResponse > authResponse
   */
  async sendPasscodeResponse(code: string): Promise<void> {
    this.getPasscodeAnswer(this.passcodeQuestion, code);
    (await this.sendVerifyAuthQuestions(this.state, this.passcodeAnswer))
      .parseVerifyResponse(this.verifyResponse)
      .isVerificationSuccesful(this.authResponse);
  }

  /**
   * Updates the otpAnswer prop with the OTP answer provided by TU
   *   - Searches the answers returned for the specific OTP text (send text message)
   * @param otpQuestion
   * @returns
   */
  getPasscodeAnswer(passcodeQuestion: ITransunionKBAQuestion | undefined, code: string): KycIdverificationComponent {
    if (!passcodeQuestion) throw 'kycIdverification:getPasscodeAnswer=Missing question';
    const answer = this.kycService.getPassCodeAnswer(passcodeQuestion, code);
    if (!answer) throw 'kycIdverification:getPasscodeAnswer=No passcode answer returned';
    this.passcodeAnswer = answer;
    return this;
  }

  /**
   * Updates the verifyResponse prop with the VerifyAuthenticationQuestions response from TU
   *   - This is the response to our answer to send OTP (send text message)
   *   - This response will contain a question (enter the passcode) embeded in CDATA
   * @param state
   * @param otpAnswer
   * @returns
   */
  async sendVerifyAuthQuestions(
    state: UpdateAppDataInput | AppDataStateModel | undefined,
    passcodeAnswer: IVerifyAuthenticationAnswer | undefined,
  ): Promise<KycIdverificationComponent> {
    if (!passcodeAnswer || !state) throw 'kycIdverification:sendVerifyAuthQuestions=Missing answer or state';
    const { success, error, data } = await this.kycService.sendVerifyAuthenticationQuestions(state, [passcodeAnswer]);
    if (!success) throw `kycIdverification:sendVerifyAuthQuestions=${error}`;
    this.verifyResponse = data;
    return this;
  }

  /**
   * Update the authResponse prop with the parsed verifyResp prop
   * @param {string | undefined} verifyResp
   * @returns
   */
  parseVerifyResponse(verifyResp: IVerifyAuthenticationQuestionsResult | undefined): KycIdverificationComponent {
    this.authResponse = verifyResp ? verifyResp : ({} as IVerifyAuthenticationQuestionsResult);
    return this;
  }
  /**
   * Update the prop to indicate that verification was successful
   * @param {IVerifyAuthenticationQuestionsResult | undefined} resp
   * @returns
   */
  isVerificationSuccesful(resp: IVerifyAuthenticationQuestionsResult | undefined): KycIdverificationComponent {
    if (!resp) throw 'kycIdverification:isVerificationSuccesful=Missing response message';
    this.authSuccessful = resp.ResponseType.toLowerCase() === 'success';
    if (!this.authSuccessful) {
      this.attempts++; // TODO replace with state/db update
      this.updateViewState('error');
    }
    return this;
  }

  onSuccessfulSignup() {
    this.kycService.completeStep(this.stepID);
    this.router.navigate(['../congratulations'], {
      relativeTo: this.route,
    });
  }

  /**
   * Once the user is verified complete the onboarding step on the server
   * @param state
   * @returns
   */
  async sendCompleteOnboarding(): Promise<KycIdverificationComponent> {
    try {
      this.kycService.completeStep(this.stepID); // !IMPORTANT, needs to call before backend, otherwise state is stale
      const { success, error } = await this.kycService.sendEnrollRequest();
      success
        ? this.router.navigate(['../congratulations'], {
            relativeTo: this.route,
          }) // api successful and TU successful
        : this.router.navigate(['../error'], {
            queryParams: {
              code: error?.Code,
            },
          }); // api successful but TU responds with error
      return this;
    } catch (err) {
      this.attempts = 3; // bail out
      this.interstitial.fetching$.next(false);
      throw new Error(`kycIdverification:sendCompleteOnboarding=${err}`);
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
}

const codeMap: Record<string, any> = {
  code: true,
};
