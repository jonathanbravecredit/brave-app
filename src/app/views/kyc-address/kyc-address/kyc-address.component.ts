import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { UserAttributes } from '@shared/services/aws/api.service';

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent extends KycBaseComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    super();
  }

  ngOnInit(): void {
    this.kycService.activateStep(1);
  }

  goBack(): void {
    this.kycService.inactivateStep(1);
    this.router.navigate(['../name'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    // need to add form validation before moving forward
    if (form.valid) {
      const attrs = {
        address: {
          ...this.formatAttributes(form, address),
        },
      } as UserAttributes;
      this.kycService.updateUserAttributes(attrs);
      this.kycService.completeStep(1);
      this.router.navigate(['../identity'], { relativeTo: this.route });
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}

const address: Record<string, any> = {
  addressOne: true,
  addressTwo: true,
  city: true,
  state: true,
  zip: true,
};
