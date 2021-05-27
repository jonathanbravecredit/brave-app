import { Component } from '@angular/core';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-welcome-pure',
  templateUrl: './kyc-welcome-pure.component.html',
})
export class KycWelcomePureComponent extends KycBaseComponent {
  constructor() {
    super();
  }
}
