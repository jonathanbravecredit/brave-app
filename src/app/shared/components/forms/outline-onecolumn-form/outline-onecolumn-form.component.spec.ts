import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { OutlineOnecolumnFormComponent } from "./outline-onecolumn-form.component";

describe("OutlineOnecolumnFormComponent", () => {
  let component: OutlineOnecolumnFormComponent;
  let fixture: ComponentFixture<OutlineOnecolumnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutlineOnecolumnFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineOnecolumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
