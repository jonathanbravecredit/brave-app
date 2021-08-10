import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-ssn-full-pure',
  templateUrl: './kyc-ssn-full-pure.component.html',
})
export class KycSsnFullPureComponent extends KycBaseComponent {
  constructor() {
    super();
  }
}
