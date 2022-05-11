import { Component, Input, ViewChild } from '@angular/core';
import { OutlineSsnFullFormComponent } from '@shared/components/forms/outline-ssn-full-form/outline-ssn-full-form.component';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-ssn-full-pure',
  templateUrl: './kyc-ssn-full-pure.component.html',
})
export class KycSsnFullPureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineSsnFullFormComponent | undefined;
  showError: boolean = false;
  @Input() ssnError = false;
  errorMessage: string = 'Invalid SSN. Please re-enter';
  constructor() {
    super();
  }
}
