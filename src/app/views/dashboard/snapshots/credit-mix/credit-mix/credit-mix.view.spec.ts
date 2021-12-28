import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";

import { CreditMixView } from "./credit-mix.view";

describe("CreditMixView", () => {
  let component: CreditMixView;
  let fixture: ComponentFixture<CreditMixView>;
  let creditMixServiceMock: any;
  class RouteMock {
    data = of();
  }

  beforeEach(async () => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [
      "getTradelineSummary",
      "getRecommendations",
    ]);
    await TestBed.configureTestingModule({
      declarations: [CreditMixView],
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
        { provide: ActivatedRoute, useClass: RouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
