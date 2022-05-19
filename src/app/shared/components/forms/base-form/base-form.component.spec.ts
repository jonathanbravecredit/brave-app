import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { BaseFormComponent } from "./base-form.component";

describe("BaseFormComponent", () => {
  let component: BaseFormComponent;
  let fixture: ComponentFixture<BaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseFormComponent],
      providers: [
        FormBuilder,
        { provide: "name", useValue: "test" },
        { provide: "validators", useValue: [] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
