import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  APIService,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { KycService } from '@shared/services/kyc/kyc.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';

interface FlatForm {
  [key: string]: string;
}

@Component({
  selector: 'brave-kyc-welcome',
  templateUrl: './kyc-welcome.component.html',
})
export class KycWelcomeComponent
  extends KycBaseComponent
  implements OnInit, AfterViewInit {
  stepID = 0;
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

  goToNext(form: FormGroup): void {
    if (form.valid) {
      // write to state...TODO write to DB
      const attrs = {
        name: {
          ...this.formatAttributes(form, name),
        },
        dob: {
          ...this.formatAttributes(form, dob),
        },
      } as UserAttributesInput;
      this.kycService.updateUserAttributes(attrs);
      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../address'], { relativeTo: this.route });
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
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
