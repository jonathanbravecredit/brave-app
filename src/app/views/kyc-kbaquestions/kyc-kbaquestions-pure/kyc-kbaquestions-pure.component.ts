import { Component, Input } from '@angular/core';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-kbaquestions-pure',
  templateUrl: './kyc-kbaquestions-pure.component.html',
})
export class KycKbaquestionsPureComponent extends KycBaseComponent {
  @Input() kbas: any[] = [];
  constructor() {
    super();
  }
}
