import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { AutocompleteAddressFormComponent } from "./autocomplete-address-form.component";

describe("AutocompleteAddressFormComponent", () => {
  let component: AutocompleteAddressFormComponent;
  let fixture: ComponentFixture<AutocompleteAddressFormComponent>;
  let formBuilderMock: any;

  beforeEach(async () => {
    formBuilderMock = jasmine.createSpyObj("FormBuilder", ["group"]);

    await TestBed.configureTestingModule({
      declarations: [AutocompleteAddressFormComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
