import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { OutlineSsnFullFormComponent } from "./outline-ssn-full-form.component";

describe("OutlineSsnFullFormComponent", () => {
  let component: OutlineSsnFullFormComponent;
  let fixture: ComponentFixture<OutlineSsnFullFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutlineSsnFullFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineSsnFullFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
