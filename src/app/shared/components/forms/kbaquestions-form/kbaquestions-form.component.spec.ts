import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { KbaquestionsFormComponent } from "./kbaquestions-form.component";

describe("KbaquestionsFormComponent", () => {
  let component: KbaquestionsFormComponent;
  let fixture: ComponentFixture<KbaquestionsFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KbaquestionsFormComponent],
      providers: [FormBuilder],
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
