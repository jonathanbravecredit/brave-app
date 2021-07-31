import { Component } from '@angular/core';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-ssn-pure',
  templateUrl: './kyc-ssn-pure.component.html',
})
export class KycSsnPureComponent extends KycBaseComponent {
  constructor() {
    super();
  }
}
