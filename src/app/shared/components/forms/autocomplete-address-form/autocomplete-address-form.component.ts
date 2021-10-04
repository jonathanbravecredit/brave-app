import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { Observable } from 'rxjs';

declare var google: any;

@Component({
  selector: 'brave-autocomplete-address-form',
  templateUrl: './autocomplete-address-form.component.html',
})
export class AutocompleteAddressFormComponent extends BaseFormComponent {
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

  onAddressClick(place: google.maps.places.PlaceResult): void {
    console.log('place clicked ===> ', place);
    // replace the fields with the appropriate values
  }
}

// TODO ensure you have all states
const states = [
  'AK',
  'AL',
  'AR',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
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
  'VA',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY',
];
