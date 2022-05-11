import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { OutlineSsnLastfourFormComponent } from "@shared/components/forms/outline-ssn-lastfour-form/outline-ssn-lastfour-form.component";
import { KycBaseComponent } from "@views/onboarding/kyc-base/kyc-base.component";
import { FilledSpinningButtonComponent } from '../../../../shared/components/buttons/filled-spinning-button/filled-spinning-button.component';

@Component({
  selector: "brave-kyc-ssn-pure",
  templateUrl: "./kyc-ssn-pure.component.html",
})
export class KycSsnPureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineSsnLastfourFormComponent | undefined;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;
  @Input() ssnError: boolean = false;
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
