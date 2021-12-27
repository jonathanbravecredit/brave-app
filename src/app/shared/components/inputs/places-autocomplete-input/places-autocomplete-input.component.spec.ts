import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesAutocompleteInputComponent } from './places-autocomplete-input.component';

describe('PlacesAutocompleteInputComponent', () => {
  let component: PlacesAutocompleteInputComponent;
  let fixture: ComponentFixture<PlacesAutocompleteInputComponent>;
  let google: {
    maps: {
      places: {
        Autocomplete: () => {};
      };
    };
  };
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
