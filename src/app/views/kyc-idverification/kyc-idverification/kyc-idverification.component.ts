import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { FormGroup, AbstractControl } from '@angular/forms';
import { SyncService } from '@shared/services/sync/sync.service';

export type KycIdverificationState = 'init' | 'sent' | 'error';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent extends KycBaseComponent {
  @Input() state: KycIdverificationState = 'init';
  stepID = 3;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private syncService: SyncService
  ) {
    super();
  }

  resendCode(): void {
    // TODO resubmit code to backend
    this.state = 'sent';
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    if (form.valid) {
      const { code } = this.formatAttributes(form, codeMap);
      // TODO submit code to backed
      this.kycService.completeStep(this.stepID);
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
