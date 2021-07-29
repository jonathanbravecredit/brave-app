import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { KycIdverificationState } from '@views/kyc-idverification/kyc-idverification/kyc-idverification.component';

@Component({
  selector: 'brave-kyc-idverification-pure',
  templateUrl: './kyc-idverification-pure.component.html',
})
export class KycIdverificationPureComponent extends KycBaseComponent {
  @Input() viewState: KycIdverificationState = 'init';
  @Output() resendClick: EventEmitter<void> = new EventEmitter();
  constructor() {
    super();
  }
}
