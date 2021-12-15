import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { OutlineSsnLastfourFormComponent } from "./outline-ssn-lastfour-form.component";

describe("OutlineSsnLastfourFormComponent", () => {
  let component: OutlineSsnLastfourFormComponent;
  let fixture: ComponentFixture<OutlineSsnLastfourFormComponent>;
  let formBuilderMock: any;

  beforeEach(async () => {
    formBuilderMock = jasmine.createSpyObj("FormBuilder", ["group"]);
    await TestBed.configureTestingModule({
      declarations: [OutlineSsnLastfourFormComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineSsnLastfourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
