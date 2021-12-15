import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { BaseFormComponent } from "./base-form.component";

describe("BaseFormComponent", () => {
  let component: BaseFormComponent;
  let fixture: ComponentFixture<BaseFormComponent>;
  let formBuilderMock: any;

  beforeEach(async () => {
    formBuilderMock = jasmine.createSpyObj("FormBuilder", ["group"]);
    await TestBed.configureTestingModule({
      declarations: [BaseFormComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderMock }],
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
