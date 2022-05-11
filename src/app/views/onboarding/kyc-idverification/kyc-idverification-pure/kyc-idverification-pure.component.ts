import { Component, EventEmitter, Input, Output, HostListener, ViewChild } from '@angular/core';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycIdverificationState } from '@views/onboarding/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { OutlineVerificationcodeFormComponent } from '../../../../shared/components/forms/outline-verificationcode-form/outline-verificationcode-form.component';
import { FilledSpinningButtonComponent } from '../../../../shared/components/buttons/filled-spinning-button/filled-spinning-button.component';

@Component({
  selector: 'brave-kyc-idverification-pure',
  templateUrl: './kyc-idverification-pure.component.html',
})
export class KycIdverificationPureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineVerificationcodeFormComponent | undefined;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;
  @Input() viewState: KycIdverificationState = 'init';
  @Output() resendClick: EventEmitter<void> = new EventEmitter();
  constructor() {
    super();
  }

  @HostListener("document:keydown.enter", ["$event"]) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.formComponent?.submitForm();
    if (this.formComponent?.parentForm.valid && this.spinner) {
      this.spinner.clicked = true;
      this.spinner.spinning = true;
      this.spinner.refreshClass();
    }
  }
}
