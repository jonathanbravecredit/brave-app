import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SignupKnowyouComponent } from "./signup-knowyou.component";

describe("SignupKnowyouComponent", () => {
  let component: SignupKnowyouComponent;
  let fixture: ComponentFixture<SignupKnowyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupKnowyouComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupKnowyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
