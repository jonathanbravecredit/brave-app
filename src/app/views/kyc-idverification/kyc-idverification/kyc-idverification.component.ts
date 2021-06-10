import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { SyncService } from '@shared/services/sync/sync.service';
import { Store } from '@ngxs/store';
import { IVerifyAuthenticationResponseSuccess } from '@shared/interfaces/verify-authentication-response.interface';

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
        const { appData: state } = this.store.snapshot();
        const xmlString = await this.kycService.getGetAuthenticationQuestionsResults(
          state
        );
        console.log('here 1');
        const questions = this.kycService.parseCurrentRawQuestions(xmlString);
        console.log('questions', questions);
        const codeQuestion = this.kycService.getPassCodeQuestion(questions);
        console.log('here 2');
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
          console.log('here 3');
          //clean up the json object coming back
          const clean = authenticated
            ? JSON.parse(authenticated)
            : ({} as IVerifyAuthenticationResponseSuccess);
          console.log('here 4');
          const body =
            clean['VerifyAuthenticationQuestions']['s:Envelope']['s:Body'];
          console.log('here 5');
          const success =
            body['VerifyAuthenticationQuestionsResponse'][
              'VerifyAuthenticationQuestionsResult'
            ]['a:ResponseType'].toLowerCase() === 'success';

          console.log('here 6');
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
        console.log('error ===> ', err);
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
