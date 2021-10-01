import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserAttributesInput } from '@shared/services/aws/api.service';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycAddressPureComponent } from '@views/onboarding/kyc-address/kyc-address-pure/kyc-address-pure.component';
import { KycComponentCanDeactivate } from '@views/onboarding/kyc-deactivate-guard/kyc-deactivate.guard';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import {
  GooglePageViewEvents as gtViews,
  GoogleClickEvents as gtClicks,
} from '@shared/services/analytics/google/constants';

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent extends KycBaseComponent implements OnInit, AfterViewInit, KycComponentCanDeactivate {
  @ViewChild(KycAddressPureComponent) pure: KycAddressPureComponent | undefined;
  stepID = 1;
  hasError: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private google: GoogleService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.google.firePageViewEvent(gtViews.OnboardingAddress);
    this.kycService.activateStep(this.stepID);
  }

  ngAfterViewInit(): void {
    this.form = this.pure?.formComponent?.parentForm; //need to bring the form up from the pure component
  }

  // @HostListener('window:onunload', ['$event'])
  // async ngOnDestroy(event: BeforeUnloadEvent) {
  //   const visible = document.visibilityState;
  //   const email = await this.kycService.getUserEmail();
  //   const resp = this.kycService.sendDropOutEmail(email);
  //   console.log('response ==> ', resp);
  // }

  // async test() {
  //   const visible = document.visibilityState;
  //   const email = await this.kycService.getUserEmail();
  //   const resp = await this.kycService.sendDropOutEmail(email);
  //   console.log('response ==> ', resp);
  // }

  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../name'], { relativeTo: this.route });
  }

  goToNext(form: FormGroup): void {
    this.google.fireClickEvent(gtClicks.OnboardingAddress);
    // need to add form validation before moving forward
    if (form.valid) {
      const attrs = {
        address: {
          ...this.formatAttributes(form, address),
        },
      } as UserAttributesInput;
      this.kycService.updateUserAttributesAsync(attrs).then((appData) => {
        this.kycService.completeStep(this.stepID);
        this.router.navigate(['../identity'], { relativeTo: this.route });
      });
    }
  }

  handleError(errors: { [key: string]: AbstractControl }): void {
    this.hasError = true;
  }
}

const address: Record<string, any> = {
  addressOne: true,
  addressTwo: true,
  city: true,
  state: true,
  zip: true,
};
