import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreditUtilizationHeaderComponent } from "./credit-utilization-header.component";

describe("CreditUtilizationHeaderComponent", () => {
  let component: CreditUtilizationHeaderComponent;
  let fixture: ComponentFixture<CreditUtilizationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditUtilizationHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
