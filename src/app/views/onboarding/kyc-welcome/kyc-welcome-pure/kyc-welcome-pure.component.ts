import { Component, ViewChild, HostListener } from "@angular/core";
import { OutlineNamedobFormComponent } from "@shared/components/forms/outline-namedob-form/outline-namedob-form.component";
import { KycBaseComponent } from "@views/onboarding/kyc-base/kyc-base.component";
import { FilledSpinningButtonComponent } from "../../../../shared/components/buttons/filled-spinning-button/filled-spinning-button.component";

@Component({
  selector: "brave-kyc-welcome-pure",
  templateUrl: "./kyc-welcome-pure.component.html",
})
export class KycWelcomePureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineNamedobFormComponent | undefined;
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
