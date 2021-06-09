import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { IVerifyAuthenticationResponseSuccess } from '@shared/interfaces/verify-authentication-response.interface';
import { Store } from '@ngxs/store';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent
  extends KycBaseComponent
  implements OnInit {
  stepID = 3;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
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
        const data = await this.kycService.updateUserAttributesAsync(attrs);
        const xmlString = await this.kycService.getGetAuthenticationQuestionsResults(
          data
        );
        const questions = this.kycService.parseCurrentRawQuestions(xmlString);
        const otpQuestion = this.kycService.getOTPQuestion(questions);
        if (otpQuestion) {
          // get the OTP  send text answer
          const otpAnswer = this.kycService.getOTPSendTextAnswer(otpQuestion);
          const { appData: state } = this.store.snapshot();
          const authenticated: IVerifyAuthenticationResponseSuccess = await this.kycService.sendVerifyAuthenticationQuestions(
            state,
            [otpAnswer]
          );
          const success =
            authenticated.VerifyAuthenticationQuestions['s:Envelope'][
              's:Body'
            ].VerifyAuthenticationQuestionsResponse.VerifyAuthenticationQuestionsResult[
              'a:ResponseType'
            ].toLowerCase() === 'success';
          if (success) {
            this.kycService.completeStep(this.stepID);
            this.router.navigate(['../code'], {
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

const phoneMap: Record<string, any> = {
  phone: true,
};
