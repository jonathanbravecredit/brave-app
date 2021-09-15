import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OutlineAddressFormComponent } from '@shared/components/forms/outline-address-form/outline-address-form.component';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-address-pure',
  templateUrl: './kyc-address-pure.component.html',
})
export class KycAddressPureComponent extends KycBaseComponent implements AfterViewInit {
  @ViewChild('form') formComponent: OutlineAddressFormComponent | undefined;
  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.form = this.formComponent?.parentForm;
  }
}
