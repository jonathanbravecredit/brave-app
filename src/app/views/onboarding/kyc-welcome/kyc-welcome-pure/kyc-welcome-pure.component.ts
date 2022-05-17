import { Component, ViewChild } from "@angular/core";
import { OutlineNamedobFormComponent } from "@shared/components/forms/outline-namedob-form/outline-namedob-form.component";
import { KycBaseComponent } from "@views/onboarding/kyc-base/kyc-base.component";

@Component({
  selector: "brave-kyc-welcome-pure",
  templateUrl: "./kyc-welcome-pure.component.html",
})
export class KycWelcomePureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineNamedobFormComponent | undefined;
  constructor() {
    super();
  }
}
