import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import {
  IOutlineInputeConfig,
  OutlineInputComponent,
} from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { Observable } from 'rxjs';

declare var google: any;

@Component({
  selector: 'brave-autocomplete-address-form',
  templateUrl: './autocomplete-address-form.component.html',
})
export class AutocompleteAddressFormComponent extends BaseFormComponent {
  @ViewChild(OutlineInputComponent) addressTwoInput: OutlineInputComponent | undefined;
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
    let addressOne = '';
    let addressTwo;
    let city = '';
    let state = '';
    let zip = '';
    if (!place?.address_components || !place?.address_components.length) return;
    for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
      // @ts-ignore remove once typings fixed
      const componentType = component.types[0];

      switch (componentType) {
        case 'street_number':
          addressOne = addressOne ? `${component.long_name} ${addressOne}` : component.long_name;
          break;
        case 'route':
          addressOne = addressOne ? `${addressOne} ${component.short_name}` : component.short_name;
          break;
        case 'postal_code':
          zip = `${component.long_name}`;
          break;
        case 'locality':
          city = component.long_name;
          break;
        case 'administrative_area_level_1':
          state = component.short_name;
          break;
      }
    }

    const address = {
      addressOne: addressOne,
      city: city,
      state: state,
      zip: zip,
    };
    // need to use form array to flatten this
    this.parentForm.patchValue({
      addressOne: { input: addressOne },
      city: { input: city },
      state: { input: state },
      zip: { input: zip },
    });
    this.addressTwoInput?.focus();
    this.parentForm.markAllAsTouched();
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
