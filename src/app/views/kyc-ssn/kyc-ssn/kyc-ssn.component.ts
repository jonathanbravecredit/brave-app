import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent extends KycBaseComponent implements OnInit {
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
    // ssn is a little different as each code is one input
    if (form.valid) {
      const temp = this.formatAttributes(form, ssn);
      const lastFour = `${temp['input-0']}${temp['input-1']}${temp['input-2']}${temp['input-3']}`;
      const attrs = {
        ssn: {
          lastfour: lastFour,
        },
      } as UserAttributesInput;
      this.kycService.updateUserAttributes(attrs);
      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
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
};
