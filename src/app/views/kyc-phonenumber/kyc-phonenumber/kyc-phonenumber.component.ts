import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { IUserAttributes } from '@store/user';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent
  extends KycBaseComponent
  implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    super();
  }

  ngOnInit(): void {
    this.kycService.activateStep(3);
  }

  goBack(): void {
    this.kycService.inactivateStep(3);
    this.router.navigate(['../identity'], { relativeTo: this.route });
  }
  goToNext(form: FormGroup): void {
    if (form.valid) {
      console.log('form', form);
      const { phone } = this.formatAttributes(form, phoneMap);
      const attrs = {
        phone: {
          primary: phone,
        },
      } as IUserAttributes;
      console.log('attrs', attrs);
      this.kycService.updateUserAttributes(attrs);
      this.router.navigate(['../code'], { relativeTo: this.route });
    }
  }
  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}

const phoneMap: Record<string, any> = {
  phone: true,
};
