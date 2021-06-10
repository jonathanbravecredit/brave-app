import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import {
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { IVerifyAuthenticationResponseSuccess } from '@shared/interfaces/verify-authentication-response.interface';
import { returnNestedObject } from '@shared/utils/utils';
import {
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { AppDataStateModel } from '@store/app-data';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent
  extends KycBaseComponent
  implements OnInit {
  private stepID = 3;
  private state: UpdateAppDataInput | undefined;
  private authXML: string | undefined;
  private authQuestions: ITransunionKBAQuestions | undefined;
  private otpQuestion: ITransunionKBAQuestion | undefined;
  private otpAnswer: IVerifyAuthenticationAnswer | undefined;
  private verifyResponse: string | undefined;
  private codeQuestion: string | undefined;
  private authResponse: IVerifyAuthenticationResponseSuccess | undefined;
  private authSuccessful: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    super();
  }

  ngOnInit(): void {
    this.kycService.activateStep(this.stepID);
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../identity'], { relativeTo: this.route });
  }

  async goToNext(form: FormGroup): Promise<void> {
    if (form.valid) {
      const { phone } = this.formatAttributes(form, phoneMap);
      const attrs = {
        phone: {
          primary: phone,
        },
      } as UserAttributesInput;

      try {
        (
          await (async () => {
            await this.updateUserAttributes(attrs);
            await this.getAuthQuestions(this.state);
            await this.updateStateWithKBAQuestions(this.authXML);
            return this;
          })
        )
          .bind(this)()
          .then((_this) => {
            _this
              .parseAuthQuestions(this.authXML)
              .getOTPQuestion(this.authQuestions);
          });

        if (!this.authQuestions)
          // no questions came back at all
          this.router.navigate(['../error'], {
            relativeTo: this.route,
          });

        if (this.otpQuestion) {
          this.getOTPAnswer(this.otpQuestion); // automatically select (send text for user)
          (await this.sendVerifyAuthQuestions(this.state, this.otpAnswer))
            .parseVerifyResponse(this.verifyResponse) // this contains the (enter code question)
            .isVerificationSuccesful(this.authResponse);
        } else {
          this.router.navigate(['../kba'], { relativeTo: this.route });
        }

        if (this.authSuccessful) {
          this.getCodeQuestion(this.authResponse);
          await this.updateStateWithCodeQuestions(this.codeQuestion);
          this.router.navigate(['../code'], {
            relativeTo: this.route,
          });
        } else {
          this.router.navigate(['../error'], { relativeTo: this.route });
        }
      } catch (err) {
        console.log('error ===> ', err);
        this.router.navigate(['../error'], { relativeTo: this.route });
      }
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }

  /**
   * Update the state prop with the current user attributes.
   * @param {UserAttributesInput | undefined} attrs
   * @returns
   */
  async updateUserAttributes(
    attrs: UserAttributesInput | undefined
  ): Promise<KycPhonenumberComponent> {
    if (!attrs) return this;
    this.state = await this.kycService.updateUserAttributesAsync(attrs);
    return this;
  }

  /**
   * Updates the authXML prop with the authentication questions back from TU
   * @param {UpdateAppDataInput | undefined} data
   * @returns
   */
  async getAuthQuestions(data: UpdateAppDataInput | undefined) {
    if (!data) return this;
    this.authXML = await this.kycService.getGetAuthenticationQuestionsResults(
      data
    );
    return this;
  }

  /**
   * Update the authQuestions prop with the parsed authXML prop
   * @param {string | undefined} xml
   * @returns
   */
  parseAuthQuestions(xml: string | undefined): KycPhonenumberComponent {
    if (!xml) return this;
    this.authQuestions = this.kycService.parseCurrentRawQuestions(xml);
    return this;
  }

  /**
   * Updates the otpQuestion prop with the OTP question provided by TU
   *   - Searches the questions returned for specific OTP text
   * @param {ITransunionKBAQuestions | undefined} questions
   * @returns
   */
  getOTPQuestion(
    questions: ITransunionKBAQuestions | undefined
  ): KycPhonenumberComponent {
    if (!questions) return this;
    this.otpQuestion = this.kycService.getOTPQuestion(questions);
    return this;
  }

  /**
   * Updates the otpAnswer prop with the OTP answer provided by TU
   *   - Searches the answers returned for the specific OTP text (send text message)
   * @param {ITransunionKBAQuestion | undefined} otpQuestion
   * @returns
   */
  getOTPAnswer(
    otpQuestion: ITransunionKBAQuestion | undefined
  ): KycPhonenumberComponent {
    if (!otpQuestion) return this;
    this.otpAnswer = this.kycService.getOTPSendTextAnswer(otpQuestion);
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
    otpAnswer: IVerifyAuthenticationAnswer | undefined
  ): Promise<KycPhonenumberComponent> {
    if (!otpAnswer || !state) return this;
    this.verifyResponse = await this.kycService.sendVerifyAuthenticationQuestions(
      state,
      [otpAnswer]
    );
    return this;
  }

  /**
   * Update the authResponse prop with the parsed verifyResp prop
   * @param {string | undefined} verifyResp
   * @returns
   */
  parseVerifyResponse(verifyResp: string | undefined): KycPhonenumberComponent {
    this.authResponse = verifyResp
      ? JSON.parse(verifyResp)
      : ({} as IVerifyAuthenticationResponseSuccess);
    return this;
  }

  /**
   * Update the codeQuestion prop with the nested object from the parsed authRespone
   *   - This is the enter pass code question
   * @param {IVerifyAuthenticationResponseSuccess | undefined} authResponse
   * @returns
   */
  getCodeQuestion(
    authResponse: IVerifyAuthenticationResponseSuccess | undefined
  ): KycPhonenumberComponent {
    if (!authResponse) return this;
    this.codeQuestion = returnNestedObject(
      authResponse,
      'a:AuthenticationDetails'
    );
    return this;
  }

  /**
   * Update the state (currentRawQuestions) with the enter pass code question
   * @param {string | undefined} question
   * @returns
   */
  async updateStateWithCodeQuestions(
    question: string | undefined
  ): Promise<KycPhonenumberComponent> {
    if (!question) return this;
    await this.kycService.updateCurrentRawQuestionsAsync(question);
    return this;
  }

  /**
   * Update the state (currentRawQuestions) with the KBA questions
   * @param {string | undefined} question
   * @returns
   */
  async updateStateWithKBAQuestions(
    question: string | undefined
  ): Promise<KycPhonenumberComponent> {
    if (!question) return this;
    await this.kycService.updateCurrentRawQuestionsAsync(question);
    return this;
  }

  /**
   * Update the prop to indicate that verification was successful
   * @param {IVerifyAuthenticationResponseSuccess | undefined} resp
   * @returns
   */
  isVerificationSuccesful(
    resp: IVerifyAuthenticationResponseSuccess | undefined
  ): KycPhonenumberComponent {
    if (!resp) return this;
    this.authSuccessful =
      returnNestedObject(resp, 'a:ResponseType').toLowerCase() === 'success';
    return this;
  }
}

const phoneMap: Record<string, any> = {
  phone: true,
};
