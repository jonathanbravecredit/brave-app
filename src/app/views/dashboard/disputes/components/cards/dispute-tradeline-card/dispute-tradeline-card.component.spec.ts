import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TradelineToDetailsPipe } from "@shared/pipes/tradeline-to-details/tradeline-to-details.pipe";

import { DisputeTradelineCardComponent } from "./dispute-tradeline-card.component";

describe("DisputeTradelineCardComponent", () => {
  let component: DisputeTradelineCardComponent;
  let fixture: ComponentFixture<DisputeTradelineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputeTradelineCardComponent, TradelineToDetailsPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeTradelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
