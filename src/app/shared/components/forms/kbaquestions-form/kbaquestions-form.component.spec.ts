import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { KbaquestionsFormComponent } from "./kbaquestions-form.component";

describe("KbaquestionsFormComponent", () => {
  let component: KbaquestionsFormComponent;
  let fixture: ComponentFixture<KbaquestionsFormComponent>;
  let formBuilderMock: any;

  beforeEach(async () => {
    formBuilderMock = jasmine.createSpyObj("FormBuilder", ["group"]);
    await TestBed.configureTestingModule({
      declarations: [KbaquestionsFormComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbaquestionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
