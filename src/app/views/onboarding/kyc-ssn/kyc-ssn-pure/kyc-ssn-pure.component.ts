import { Component, Input, ViewChild } from '@angular/core';
import { OutlineSsnLastfourFormComponent } from "@shared/components/forms/outline-ssn-lastfour-form/outline-ssn-lastfour-form.component";
import { KycBaseComponent } from "@views/onboarding/kyc-base/kyc-base.component";

@Component({
  selector: "brave-kyc-ssn-pure",
  templateUrl: "./kyc-ssn-pure.component.html",
})
export class KycSsnPureComponent extends KycBaseComponent {
  @ViewChild("form") formComponent: OutlineSsnLastfourFormComponent | undefined;
  @Input() ssnError: boolean = false;
  constructor() {
    super();
  }
}
