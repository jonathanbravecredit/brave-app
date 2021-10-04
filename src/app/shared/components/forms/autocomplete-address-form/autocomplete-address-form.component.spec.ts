import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteAddressFormComponent } from './autocomplete-address-form.component';

describe('AutocompleteAddressFormComponent', () => {
  let component: AutocompleteAddressFormComponent;
  let fixture: ComponentFixture<AutocompleteAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteAddressFormComponent ]
    })
    .compileComponents();
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
