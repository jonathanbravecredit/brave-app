import { Component, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { BaseFormComponent } from "@shared/components/forms/base-form/base-form.component";
import { OutlineInputComponent } from "@shared/components/inputs/outline-input/outline-input.component";
import { Observable } from "rxjs";
import { FilledSpinningButtonComponent } from "../../buttons/filled-spinning-button/filled-spinning-button.component";
// DO NOT REMOVE BELOW REFERENCE!!!!
/// <reference types="google.maps" />
declare var google: any;
// DO NOT REMOVE ABOVE REFERENCE!!!!

@Component({
  selector: "brave-autocomplete-address-form",
  templateUrl: "./autocomplete-address-form.component.html",
})
export class AutocompleteAddressFormComponent extends BaseFormComponent {
  @ViewChild(OutlineInputComponent) addressTwoInput:
    | OutlineInputComponent
    | undefined;
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;
  values$: Observable<any>;
  status$: Observable<any>;

  constructor(fb: FormBuilder) {
    super(fb, "address-form");
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  onAddressClick(place: google.maps.places.PlaceResult): void {
    let addressOne = "";
    let addressTwo;
    let city = "";
    let state = "";
    let zip = "";
    if (!place?.address_components || !place?.address_components.length) return;
    for (const component of place.address_components as unknown as google.maps.GeocoderAddressComponent[]) {
      // @ts-ignore remove once typings fixed
      const componentType = component.types[0];

      switch (componentType) {
        case "street_number":
          addressOne = addressOne
            ? `${component.long_name} ${addressOne}`
            : component.long_name;
          break;
        case "route":
          addressOne = addressOne
            ? `${addressOne} ${component.short_name}`
            : component.short_name;
          break;
        case "postal_code":
          zip = `${component.long_name}`;
          break;
        case "locality":
          city = component.long_name;
          break;
        case "administrative_area_level_1":
          state = component.short_name;
          break;
      }
    }
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
