import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { OutlineNamedobFormComponent } from "./outline-namedob-form.component";

describe("OutlineNamedobFormComponent", () => {
  let component: OutlineNamedobFormComponent;
  let fixture: ComponentFixture<OutlineNamedobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutlineNamedobFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineNamedobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
