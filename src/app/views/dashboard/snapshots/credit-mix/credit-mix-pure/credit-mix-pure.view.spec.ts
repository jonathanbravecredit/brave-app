import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreditMixFilterPipePipe } from "../credit-mix-filter-pipe/credit-mix-filter-pipe.pipe";

import { CreditMixPureView } from "./credit-mix-pure.view";

describe("CreditMixPureView", () => {
  let component: CreditMixPureView;
  let fixture: ComponentFixture<CreditMixPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditMixPureView, CreditMixFilterPipePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
