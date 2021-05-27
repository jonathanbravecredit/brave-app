import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IUserAttributes } from '@store/user';

interface FlatForm {
  [key: string]: string;
}

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private kycService: KycService
  ) {}

  ngOnInit(): void {
    this.kycService.activateStep(1);
  }

  goBack(): void {
    this.kycService.inactivateStep(1);
    this.location.back();
  }

  goToNext(form: FormGroup): void {
    // need to add form validation before moving forward
    this.kycService.updateUserAttributes(this.formatAttributes(form));
    this.kycService.completeStep(1);
    this.router.navigate(['../identity'], { relativeTo: this.route });
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }

  formatAttributes(form: FormGroup): IUserAttributes {
    const flatForm: Record<string, any> = this.flattenAttributes(form.value);
    return {
      address: {
        ...flatForm,
      },
    } as IUserAttributes;
  }

  flattenAttributes(formValues: any): FlatForm {
    let values: FlatForm = {};
    Object.keys(formValues).forEach((key) => {
      if (address[key]) {
        values[key] = formValues[key].input;
      }
    });
    return values;
  }
}

const address: Record<string, any> = {
  addressOne: true,
  addressTwo: true,
  city: true,
  state: true,
  zip: true,
};
