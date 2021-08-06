import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { IVerifyAuthenticationQuestionsResult } from '@shared/interfaces/verify-authentication-response.interface';
import { UpdateAppDataInput } from '@shared/services/aws/api.service';
import { returnNestedObject } from '@shared/utils/utils';
import {
  ITransunionKBAChallengeAnswer,
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { AppDataStateModel } from '@store/app-data';

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
  ) {
    super();
  }

  resendCode(): void {
    // TODO resubmit code to backend
    this.updateViewState('sent');
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.updateViewState('minimum');
  }

  updateViewState(viewState: KycIdverificationState) {
    this.viewState = viewState;
  }

  /**
   * Method to:
   * - Get authentication questions
   * - send the passcode response
   * - Enroll the user in report & score and disputes
   * - Update the enriched enrollment data to state
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    if (form.valid) {
      const { code } = this.formatAttributes(form, codeMap);
      this.code = code;
      const { appData } = this.store.snapshot();
      this.state = appData;

      try {
        this.getAuthenticationQuestions();
        this.passcodeQuestion
          ? await this.sendPasscodeResponse(this.code)
          : (() => {
              throw 'No passcode questionfound';
            })();
        this.authSuccessful
          ? this.sendCompleteOnboarding(this.state)
          : (() => {
              throw 'Authentication request failed';
            })();
      } catch (err) {
        console.log('error ===> ', err); // TODO can better handle errors
        if (this.attempts > 2) {
          this.router.navigate(['../error'], { relativeTo: this.route });
        }
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
   * @param {string | undefined} xml
   * @returns
   */
  parseAuthDetails(xml: string | undefined): KycIdverificationComponent {
    if (!xml) return this;
    this.authQuestions = this.kycService.parseCurrentRawAuthDetails(xml);
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
   * @param {ITransunionKBAQuestions | undefined} questions
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
   * Updates the otpAnswer prop with the OTP answer provided by TU
   *   - Searches the answers returned for the specific OTP text (send text message)
   * @param {ITransunionKBAQuestion | undefined} otpQuestion
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
   *   - This response will contain an question (enter the passcode) embeded in CDATA
   * @param {UpdateAppDataInput | AppDataStateModel | undefined} state
   * @param {IVerifyAuthenticationAnswer | undefined} otpAnswer
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
    console.log('verifyResponse ===> ', this.verifyResponse);
    return this;
  }

  /**
   * Update the authResponse prop with the parsed verifyResp prop
   * @param {string | undefined} verifyResp
   * @returns
   */
  parseVerifyResponse(verifyResp: IVerifyAuthenticationQuestionsResult | undefined): KycIdverificationComponent {
    console.log('parseVerifyResponse ===> ', verifyResp);
    this.authResponse = verifyResp ? verifyResp : ({} as IVerifyAuthenticationQuestionsResult);
    return this;
  }
  /**
   * Update the prop to indicate that verification was successful
   * @param {IVerifyAuthenticationQuestionsResult | undefined} resp
   * @returns
   */
  isVerificationSuccesful(resp: IVerifyAuthenticationQuestionsResult | undefined): KycIdverificationComponent {
    console.log('isVerification ===> ', resp);
    if (!resp) throw 'kycIdverification:isVerificationSuccesful=Missing response message';
    this.authSuccessful = resp.ResponseType.toLowerCase() === 'success';
    if (!this.authSuccessful) {
      this.attempts++;
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
   * @param {UpdateAppDataInput | AppDataStateModel | undefined} state
   * @returns
   */
  async sendCompleteOnboarding(
    state: UpdateAppDataInput | AppDataStateModel | undefined,
  ): Promise<KycIdverificationComponent> {
    if (!state) return this;
    try {
      this.kycService.completeStep(this.stepID); // !IMPORTANT, needs to call before backend, otherwise state is stale
      const { success, error } = await this.kycService.sendEnrollRequest(state);
      success
        ? this.router.navigate(['../congratulations'], {
            relativeTo: this.route,
          })
        : (() => {
            this.attempts = 3;
            throw `kycIdverification:sendCompleteOnboarding=${error}`;
          })();
      return this;
    } catch (err) {
      this.attempts = 3;
      throw new Error(`kycIdverification:sendCompleteOnboarding=${err}`);
    }
  }
}

const codeMap: Record<string, any> = {
  code: true,
};
