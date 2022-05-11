import { Component, ViewChild, HostListener } from "@angular/core";
import { OutlineAddressFormComponent } from "@shared/components/forms/outline-address-form/outline-address-form.component";
import { KycBaseComponent } from "@views/onboarding/kyc-base/kyc-base.component";
import { FilledSpinningButtonComponent } from "../../../../shared/components/buttons/filled-spinning-button/filled-spinning-button.component";

@Component({
  selector: "brave-kyc-address-pure",
  templateUrl: "./kyc-address-pure.component.html",
})
export class KycAddressPureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineAddressFormComponent | undefined;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;
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
