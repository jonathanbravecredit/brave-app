import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

import { CreditUtilizationView } from "./credit-utilization.view";

describe("CreditUtilizationView", () => {
  let component: CreditUtilizationView;
  let fixture: ComponentFixture<CreditUtilizationView>;
  class RouteMock {
    data = of();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditUtilizationView],
      providers: [{ provide: ActivatedRoute, useClass: RouteMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
