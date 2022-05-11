import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { OutlineSsnFullFormComponent } from '@shared/components/forms/outline-ssn-full-form/outline-ssn-full-form.component';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { FilledSpinningButtonComponent } from '../../../../shared/components/buttons/filled-spinning-button/filled-spinning-button.component';

@Component({
  selector: 'brave-kyc-ssn-full-pure',
  templateUrl: './kyc-ssn-full-pure.component.html',
})
export class KycSsnFullPureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineSsnFullFormComponent | undefined;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;
  showError: boolean = false;
  @Input() ssnError = false;
  errorMessage: string = 'Invalid SSN. Please re-enter';
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
