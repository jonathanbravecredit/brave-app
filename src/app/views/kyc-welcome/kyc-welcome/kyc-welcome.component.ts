import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { IUserAttributes } from '@store/user';

interface FlatForm {
  [key: string]: string;
}

@Component({
  selector: 'brave-kyc-welcome',
  templateUrl: './kyc-welcome.component.html',
})
export class KycWelcomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {}

  ngOnInit(): void {
    this.kycService.activateStep(0);
  }

  goToNext(form: FormGroup): void {
    if (form.valid) {
      // write to state...TODO write to DB
      this.kycService.updateUserAttributes(this.formatAttributes(form));
      this.kycService.completeStep(0);
      this.router.navigate(['../address'], { relativeTo: this.route });
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }

  formatAttributes(form: FormGroup): IUserAttributes {
    const flatForm: Record<string, any> = this.flattenAttributes(form.value);
    const obj1: any = {};
    const obj2: any = {};
    let attrs: IUserAttributes = {} as IUserAttributes;
    Object.keys(flatForm).forEach((key) => {
      if (name[key]) {
        obj1[key] = flatForm[key];
      }
      if (dob[key]) {
        obj2[key] = flatForm[key];
      }
    });
    return {
      ...attrs,
      name: {
        ...obj1,
      },
      dob: {
        ...obj2,
      },
    };
  }

  flattenAttributes(formValues: any): FlatForm {
    let values: FlatForm = {};
    Object.keys(formValues).forEach((key) => {
      values[key] = formValues[key].input;
    });
    return values;
  }
}

const name: Record<string, any> = {
  first: true,
  middle: true,
  last: true,
};

const dob: Record<string, any> = {
  year: true,
  month: true,
  day: true,
};
