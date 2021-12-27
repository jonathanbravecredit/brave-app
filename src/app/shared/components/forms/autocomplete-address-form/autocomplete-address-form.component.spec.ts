import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { AutocompleteAddressFormComponent } from './autocomplete-address-form.component';
// DO NOT REMOVE BELOW REFERENCE!!!!
/// <reference types="google.maps" />
declare var google: any;
// DO NOT REMOVE ABOVE REFERENCE!!!!

describe('AutocompleteAddressFormComponent', () => {
  let fixture: ComponentFixture<AutocompleteAddressFormComponent>;
  let component: AutocompleteAddressFormComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteAddressFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
