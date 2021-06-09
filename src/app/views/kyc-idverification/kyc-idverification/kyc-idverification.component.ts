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
        const questions = this.kycService.parseCurrentRawQuestions(xmlString);
        const codeQuestion = this.kycService.getPassCodeQuestion(questions);
        if (codeQuestion) {
          // get the OTP  send text answer
          const codeAnswer = this.kycService.getPassCodeAnswer(
            codeQuestion,
            code
          );
          const authenticated: IVerifyAuthenticationResponseSuccess = await this.kycService.sendVerifyAuthenticationQuestions(
            state,
            [codeAnswer]
          );
          const success =
            authenticated.VerifyAuthenticationQuestions['s:Envelope'][
              's:Body'
            ].VerifyAuthenticationQuestionsResponse.VerifyAuthenticationQuestionsResult[
              'a:ResponseType'
            ].toLowerCase() === 'success';
          if (success) {
            this.kycService.completeStep(this.stepID);
            this.router.navigate(['../congratulations'], {
              relativeTo: this.route,
            });
          } else {
            this.router.navigate(['../error'], { relativeTo: this.route });
          }
        }
      } catch {
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
