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
          // get the OTP  send text answer...TODO refactor this section (used in 3 places0)
          const otpAnswer = this.kycService.getOTPSendTextAnswer(otpQuestion);
          const { appData: state } = this.store.snapshot();
          const authenticated = await this.kycService.sendVerifyAuthenticationQuestions(
            state,
            [otpAnswer]
          );

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
            // need to save the new questions about passcode
            const rawAuthDetails = result
              ? result['a:AuthenticationDetails']
              : null;
            // TODO the answer xml is the same for auth details as it is for
            //   KBA questions...only thing different is AuthenticationDetails above
            //   Remove Auth details from state and remove methods from KYC services
            await this.kycService.updateCurrentRawQuestionsAsync(
              rawAuthDetails
            );
            this.router.navigate(['../code'], {
              relativeTo: this.route,
            });
          } else {
            this.router.navigate(['../error'], { relativeTo: this.route });
          }
        } else {
          this.router.navigate(['../kba'], { relativeTo: this.route });
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

const phoneMap: Record<string, any> = {
  phone: true,
};
