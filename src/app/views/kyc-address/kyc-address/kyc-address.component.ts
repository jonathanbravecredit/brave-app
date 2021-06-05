import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent
  extends KycBaseComponent
  implements OnInit, AfterViewInit {
  stepID = 1;
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
    this.router.navigate(['../name'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    // need to add form validation before moving forward
    if (form.valid) {
      const attrs = {
        address: {
          ...this.formatAttributes(form, address),
        },
      } as UserAttributesInput;
      this.kycService.updateUserAttributes(attrs);
      this.kycService.completeStep(this.stepID);
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
