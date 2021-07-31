import { Component, Input } from '@angular/core';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-address-pure',
  templateUrl: './kyc-address-pure.component.html',
})
export class KycAddressPureComponent extends KycBaseComponent {
  constructor() {
    super();
  }
}
