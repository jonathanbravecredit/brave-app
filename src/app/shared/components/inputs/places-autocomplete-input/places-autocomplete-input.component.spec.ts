import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesAutocompleteInputComponent } from './places-autocomplete-input.component';
// DO NOT REMOVE BELOW REFERENCE!!!!
/// <reference types="google.maps" />
declare var google: any;
// DO NOT REMOVE ABOVE REFERENCE!!!!

describe('PlacesAutocompleteInputComponent', () => {
  let component: PlacesAutocompleteInputComponent;
  let fixture: ComponentFixture<PlacesAutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacesAutocompleteInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
