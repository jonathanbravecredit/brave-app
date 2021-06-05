import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { FlatForm, KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserAttributesInput } from '@shared/services/aws/api.service';

@Component({
  selector: 'brave-kyc-ssn-full',
  templateUrl: './kyc-ssn-full.component.html',
})
export class KycSsnFullComponent extends KycBaseComponent implements OnInit {
  stepID = 2;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    super();
  }

  ngOnInit(): void {
    this.kycService.activateStep(this.stepID);
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../address'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    // TODO !!!Important!!! consider how to handle full SSN. Don't want to keep in db
    if (form.valid) {
      const temp = this.formatAttributes(form, ssn);
      const full = this.formatCode(temp);
      const attrs = {
        ssn: {
          lastfour: `${temp['input-0']}${temp['input-1']}${temp['input-2']}${temp['input-3']}`,
          full: full,
        },
      } as UserAttributesInput;
      this.kycService.updateUserAttributes(attrs);
      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
  }

  formatCode(values: FlatForm): string {
    let str = '';
    for (let i = 0; i < 9; i++) {
      str += values[`input-${i}`];
    }
    return str;
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}

const ssn: Record<string, any> = {
  'input-0': true,
  'input-1': true,
  'input-2': true,
  'input-3': true,
  'input-4': true,
  'input-5': true,
  'input-6': true,
  'input-7': true,
  'input-8': true,
};
