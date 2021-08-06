import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-outline-address-form',
  templateUrl: './outline-address-form.component.html',
  providers: [{ provide: 'name', useValue: 'address-form' }],
})
export class OutlineAddressFormComponent extends BaseFormComponent {
  values$: Observable<any>;
  status$: Observable<any>;
  public addressOneConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'Street Address',
    placeholder: 'Street Address',
    autocomplete: 'address-line1',
  };
  public addressTwoConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: '',
    placeholder: 'Apt, Suite, Building, etc.',
    autocomplete: 'address-line2',
  };
  public cityConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'City',
    placeholder: 'City',
    autocomplete: 'address-level2',
  };
  public stateConfig: IOutlineSelectInputConfig = {
    size: 'sm',
    label: 'State',
    autocomplete: 'address-level3',
    options: states,
  };
  public zipConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'Zip',
    placeholder: 'Zip',
    autocomplete: 'postal-code',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'address-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }
}

// TODO ensure you have all states
const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];
