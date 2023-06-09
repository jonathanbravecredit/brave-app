import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { OutlineNameFormComponent } from "./outline-name-form.component";

describe("OutlineNameFormComponent", () => {
  let component: OutlineNameFormComponent;
  let fixture: ComponentFixture<OutlineNameFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutlineNameFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
