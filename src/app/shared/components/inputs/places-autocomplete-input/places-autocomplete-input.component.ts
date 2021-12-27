import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';

// DO NOT REMOVE BELOW REFERENCE!!!!
/// <reference types="google.maps" />
declare var google: any;
// DO NOT REMOVE ABOVE REFERENCE!!!!

@Component({
  selector: 'brave-places-autocomplete-input',
  templateUrl: './places-autocomplete-input.component.html',
})
export class PlacesAutocompleteInputComponent extends OutlineInputComponent implements AfterViewInit {
  @Input() addressType: string = 'geocode';
  @Output() addressClick: EventEmitter<google.maps.places.PlaceResult> = new EventEmitter();
  @ViewChild('addressInput') addressInput: any;

  constructor() {
    super(new FormBuilder());
  }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  getPlaceAutocomplete() {
    if (!google || google.maps.places.Autocomplete) return;
    const autocomplete = new google.maps.places.Autocomplete(this.addressInput.nativeElement, {
      componentRestrictions: { country: 'US' },
      types: [this.addressType], // 'establishment' / 'address' / 'geocode'
      fields: ['address_components', 'name'],
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.onPlaceChanged(place);
    });
  }

  onPlaceChanged(place: google.maps.places.PlaceResult) {
    if (!place.name) {
      // no item clicked, and just typed and hit entered.
      this.componentFormGroup.controls['input'].setValue('');
    } else {
      this.componentFormGroup.controls['input'].setValue(place.formatted_address);
      this.addressClick.emit(place);
    }
  }
}
