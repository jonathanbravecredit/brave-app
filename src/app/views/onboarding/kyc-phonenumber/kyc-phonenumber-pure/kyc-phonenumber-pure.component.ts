import { Component } from '@angular/core';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-phonenumber-pure',
  templateUrl: './kyc-phonenumber-pure.component.html',
})
export class KycPhonenumberPureComponent extends KycBaseComponent {
  constructor() {
    super();
  }
}
