import { Component, ViewChild } from '@angular/core';
import { OutlinePhoneFormComponent } from '@shared/components/forms/outline-phone-form/outline-phone-form.component';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-phonenumber-pure',
  templateUrl: './kyc-phonenumber-pure.component.html',
})
export class KycPhonenumberPureComponent extends KycBaseComponent {
  @ViewChild('form') formComponent: OutlinePhoneFormComponent | undefined;
  constructor() {
    super();
  }
}
