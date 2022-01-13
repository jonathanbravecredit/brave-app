import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DecodePipe } from "@shared/pipes/decode/decode.pipe";

import { TradelinePaymentIconKeyComponent } from "./tradeline-payment-icon-key.component";

describe("TradelinePaymentIconKeyComponent", () => {
  let component: TradelinePaymentIconKeyComponent;
  let fixture: ComponentFixture<TradelinePaymentIconKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradelinePaymentIconKeyComponent, DecodePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinePaymentIconKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
