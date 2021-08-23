import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinePaymentHistoryComponent } from './tradeline-payment-history.component';

describe('TradelinePaymentHistoryComponent', () => {
  let component: TradelinePaymentHistoryComponent;
  let fixture: ComponentFixture<TradelinePaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinePaymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinePaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
