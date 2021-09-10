import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { FlatForm, KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserAttributesInput } from '@shared/services/aws/api.service';

@Component({
  selector: 'brave-kyc-ssn-full',
  templateUrl: './kyc-ssn-full.component.html',
})
export class KycSsnFullComponent extends KycBaseComponent implements OnInit {
  stepID = 2;
  constructor(private router: Router, private route: ActivatedRoute, private kycService: KycService) {
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
    if (form.valid) {
      const { full } = this.formatAttributes(form, ssn);
      const attrs = {
        ssn: {
          lastfour: full.slice(-4),
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
    // console.log('form errors', errors);
  }
}

const ssn: Record<string, any> = {
  full: true,
};
