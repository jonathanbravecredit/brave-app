import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { OutlineNamedobFormComponent } from "./outline-namedob-form.component";

describe("OutlineNamedobFormComponent", () => {
  let component: OutlineNamedobFormComponent;
  let fixture: ComponentFixture<OutlineNamedobFormComponent>;
  let formBuilderMock: any;

  beforeEach(async () => {
    formBuilderMock = jasmine.createSpyObj("FormBuilder", ["group"]);
    await TestBed.configureTestingModule({
      declarations: [OutlineNamedobFormComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderMock }],
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
