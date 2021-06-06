import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import {
  APIService,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent extends KycBaseComponent implements OnInit {
  stepID = 2;
  constructor(
    private api: APIService,
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private transunion: TransunionService
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

  async goToNext(form: FormGroup): Promise<void> {
    // ssn is a little different as each code is one input
    if (form.valid) {
      const temp = this.formatAttributes(form, ssn);
      const lastFour = `${temp['input-0']}${temp['input-1']}${temp['input-2']}${temp['input-3']}`;
      const attrs = {
        ssn: {
          lastfour: lastFour,
        },
      } as UserAttributesInput;
      const data = await this.kycService.updateUserAttributesSync(attrs);
      const resp = await this.sendIndicativeEnrichment(data);
      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
  }

  async sendIndicativeEnrichment(
    data: UpdateAppDataInput
  ): Promise<string | undefined> {
    try {
      console.log('data in', data);
      const msg = this.transunion.createIndicativeEnrichmentPayload(data);
      console.log('msg to TU', msg);
      const res = await this.api.Transunion(
        'IndicativeEnrichment',
        JSON.stringify(msg)
      );
      console.log('res from TU');
      return res ? res : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
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
