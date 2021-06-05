import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent
  extends KycBaseComponent
  implements OnInit, AfterViewInit {
  stepID = 3;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private syncService: SyncService
  ) {
    super();
  }

  ngOnInit(): void {
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.syncService.syncStateToBackend();
  }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
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
      } as UserAttributesInput;
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
