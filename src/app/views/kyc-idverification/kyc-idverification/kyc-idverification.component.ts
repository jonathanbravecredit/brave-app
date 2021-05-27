import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { IUserAttributes } from '@store/user';
import { FormGroup, AbstractControl } from '@angular/forms';

export type KycIdverificationState = 'init' | 'sent' | 'error';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent
  extends KycBaseComponent
  implements OnInit {
  @Input() state: KycIdverificationState = 'init';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    super();
  }

  ngOnInit(): void {}

  resendCode(): void {
    // TODO resubmit code to backend
    this.state = 'sent';
  }

  goBack(): void {
    this.kycService.inactivateStep(3);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    if (form.valid) {
      const { code } = this.formatAttributes(form, codeMap);
      // TODO submit code to backed
      this.kycService.completeStep(3);
      // this.router.navigate(['../congratulations'], { relativeTo: this.route });
    }
  }
  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}

const codeMap: Record<string, any> = {
  code: true,
};
