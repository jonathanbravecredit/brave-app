import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { SignUpComponent } from "./sign-up.component";

describe("SignUpComponent", () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let formBuilderMock: any;

  beforeEach(async () => {
    formBuilderMock = jasmine.createSpyObj("FormBuilder", ["group"]);

    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
