import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { IVerifyAuthenticationResponseSuccess } from '@shared/interfaces/verify-authentication-response.interface';
import { TUReportResponseInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { returnNestedObject } from '@shared/utils/utils';
import {
  ITransunionKBAChallengeAnswer,
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { AppDataStateModel } from '@store/app-data';
import { IEnrollResult } from '@shared/interfaces/enroll.interface';
import { CodeGuruProfiler } from 'aws-sdk';

export type KycIdverificationState = 'init' | 'sent' | 'error';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent extends KycBaseComponent {
  @Input() viewState: KycIdverificationState = 'init';
  stepID = 3;
  private state: UpdateAppDataInput | undefined;
  private code: string | undefined;
  private authXML: string | undefined;
  private authQuestions: ITransunionKBAChallengeAnswer | undefined;
  private passcodeQuestion: ITransunionKBAQuestion | undefined;
  private passcodeAnswer: IVerifyAuthenticationAnswer | undefined;
  private authChallenge: ITransunionKBAQuestions | undefined;
  private verifyResponse: IVerifyAuthenticationResponseSuccess | undefined;
  private authResponse: IVerifyAuthenticationResponseSuccess | undefined;
  private authSuccessful: boolean = false;
  private enrollResult: IEnrollResult | undefined;

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
    this.viewState = 'sent';
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }

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
          ? await this.sendEnrollRequest(this.state)
          : (() => {
              throw 'Authentication request failed';
            })();
        this.enrollResult
          ? await this.updateEnrichedEnrollment(this.enrollResult)
          : (() => {
              throw 'Enroll request failed';
            })();
      } catch (err) {
        console.log('error ===> ', err); // TODO can better handle errors
        this.router.navigate(['../error'], { relativeTo: this.route });
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
   * Method to:
   * - Enrich the enrollment data
   * - Update the agency state
   * - Navigate to end step if successful
   * @param enrollResult
   */
  async updateEnrichedEnrollment(enrollResult: IEnrollResult): Promise<void> {
    const enriched = this.kycService.enrichEnrollmentData(this.state, enrollResult);
    if (!enriched) throw `Enrichment failed`;
    await this.kycService.updateAgenciesAsync(enriched.agencies);
    this.kycService.completeStep(this.stepID);
    this.router.navigate(['../congratulations'], {
      relativeTo: this.route,
    });
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
    if (!questions) throw 'Error in kycIdverification:createChallengeConfig=Missing questions';
    const config = returnNestedObject(questions, 'ChallengeConfiguration');
    if (!config) throw 'Error in kycIdverification:createChallengeConfig=ChallengeConfiguration not found';
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
    if (!questions) throw 'Error in kycIdverification:getPasscodeQuestion=Missing questions';
    const question = this.kycService.getPassCodeQuestion(questions);
    if (!question) throw 'Error in kycIdverification:getPasscodeQuestion=No passcode question returned';
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
    if (!passcodeQuestion) return this;
    this.passcodeAnswer = this.kycService.getPassCodeAnswer(passcodeQuestion, code);
    return this;
  }

  /**
   * Update the authResponse prop with the parsed verifyResp prop
   * @param {string | undefined} verifyResp
   * @returns
   */
  parseVerifyResponse(verifyResp: IVerifyAuthenticationResponseSuccess | undefined): KycIdverificationComponent {
    this.authResponse = verifyResp ? verifyResp : ({} as IVerifyAuthenticationResponseSuccess);
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
    if (!passcodeAnswer || !state) return this;
    this.verifyResponse = await this.kycService.sendVerifyAuthenticationQuestions(state, [passcodeAnswer]);
    return this;
  }

  /**
   * Update the prop to indicate that verification was successful
   * @param {IVerifyAuthenticationResponseSuccess | undefined} resp
   * @returns
   */
  isVerificationSuccesful(resp: IVerifyAuthenticationResponseSuccess | undefined): KycIdverificationComponent {
    if (!resp) return this;
    this.authSuccessful = returnNestedObject(resp, 'ResponseType')?.toLowerCase() === 'success';
    return this;
  }

  /**
   * Once the user is verified send the enroll request to return the users credit reports
   * @param {UpdateAppDataInput | AppDataStateModel | undefined} state
   * @returns
   */
  async sendEnrollRequest(
    state: UpdateAppDataInput | AppDataStateModel | undefined,
  ): Promise<KycIdverificationComponent> {
    if (!state) return this;
    try {
      const resp = await this.kycService.sendEnrollRequest(state);
      const enrollResult = returnNestedObject(resp, 'EnrollResult');
      this.enrollResult = enrollResult ? enrollResult : undefined;
      return this;
    } catch (err) {
      throw new Error(`Error in kycIdverification:sendEnrollRequest=${err}`);
    }
  }
}

const codeMap: Record<string, any> = {
  code: true,
};
