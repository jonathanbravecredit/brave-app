import { Component } from '@angular/core';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-welcomeback-pure',
  templateUrl: './kyc-welcomeback-pure.component.html',
})
export class KycWelcomebackPureComponent extends KycBaseComponent {
  constructor() {
    super();
  }
}
