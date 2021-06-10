import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { IVerifyAuthenticationResponseSuccess } from '@shared/interfaces/verify-authentication-response.interface';
import { UpdateAppDataInput } from '@shared/services/aws/api.service';

export type KycIdverificationState = 'init' | 'sent' | 'error';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent extends KycBaseComponent {
  @Input() state: KycIdverificationState = 'init';
  stepID = 3;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private kycService: KycService
  ) {
    super();
  }

  resendCode(): void {
    // TODO resubmit code to backend
    this.state = 'sent';
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }

  async goToNext(form: FormGroup): Promise<void> {
    if (form.valid) {
      const { code } = this.formatAttributes(form, codeMap);
      // TODO submit code to backed
      try {
        const { appData } = this.store.snapshot();
        const state: UpdateAppDataInput = appData;
        // pulled the saved questions from state (saved in kyc-phonenumber)
        const questions = this.kycService.parseCurrentRawAuthDetails(
          state.agencies?.transunion?.currentRawQuestions || ''
        );
        const configuration =
          questions.VerifyChallengeAnswersResponseSuccess
            .ChallengeConfiguration;
        const challenge = {
          ChallengeConfigurationType: {
            ...configuration,
          },
        };
        const codeQuestion = this.kycService.getPassCodeQuestion(challenge);
        if (codeQuestion) {
          // get the OTP  send text answer
          const codeAnswer = this.kycService.getPassCodeAnswer(
            codeQuestion,
            code
          );
          const authenticated = await this.kycService.sendVerifyAuthenticationQuestions(
            state,
            [codeAnswer]
          );
          //clean up the json object coming back
          const clean = authenticated
            ? JSON.parse(authenticated)
            : ({} as IVerifyAuthenticationResponseSuccess);

          const verificationQuestions = clean
            ? clean['VerifyAuthenticationQuestions']
            : null;
          const envelope = verificationQuestions
            ? verificationQuestions['s:Envelope']
            : null;
          const body = envelope ? envelope['s:Body'] : null;
          const response = body
            ? body['VerifyAuthenticationQuestionsResponse']
            : null;
          const result = response
            ? response['VerifyAuthenticationQuestionsResult']
            : null;
          const type = result ? result['a:ResponseType'] : null;
          const success = type ? type.toLowerCase() === 'success' : false;

          if (success) {
            this.kycService.completeStep(this.stepID);
            this.router.navigate(['../congratulations'], {
              relativeTo: this.route,
            });
          } else {
            this.router.navigate(['../error'], { relativeTo: this.route });
          }
        } else {
          // code questions not coming back
        }
      } catch (err) {
        this.router.navigate(['../error'], { relativeTo: this.route });
      }
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}

const codeMap: Record<string, any> = {
  code: true,
};
